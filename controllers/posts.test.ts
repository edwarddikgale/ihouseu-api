import Posts from '../models/Posts';
import {IPost} from '../models/IPost';
import {getPost} from './posts';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
//import { assert } from 'chai';

chai.should();
chai.use(sinonChai);


describe("Posts Controller Unit Tests", function (){
    let sandbox = sinon.createSandbox();
    //let Posts:any;
    const expect = chai.expect;
    const assert = chai.assert;
    const fakeId = "12345;"
    const fakePost = {_id:fakeId, title: "Test1", body: "Body 1", date: new Date()};
    let req: any;
    let res:any;
    let next:any;
    let returnJson: any;

    this.beforeEach(() => {

        sandbox.restore();
        next = sandbox.spy();
        returnJson = sandbox.spy();
        req = {params:{id: fakeId}};
        res = {
            //json: sandbox.spy(),
            //status: sandbox.spy()
            status: sandbox.stub().returns({json: returnJson})
        }
        
    });
    this.afterEach(()=>{
        sandbox.restore();
    });
    describe("Get User functionality", function(){
        it("Should throw an error if a post with this ID is not found", async function(){
           
            const message = 'Post not found';
            sandbox.stub(Posts, 'findOne').rejects(new Error(message));

            await getPost(req, res, next)
                .catch(err => {
                    expect(err.message).to.have.length.greaterThanOrEqual(0);
                    expect(err.message).to.equal(message)
                });
            
            expect(res.status.notCalled).to.be.true;
            expect(returnJson.notCalled).to.be.true;
            //check the call back function gets called
            expect(next.called).to.be.true;     
            
        })
        it("Should return correct post if a post with matching id exists", async function(){

            sandbox.stub(Posts, 'findOne').resolves(fakePost);
            await getPost(req, res, next);

            //check that the correct status code was returned
            //expect(res.status.to.be.called).to.be.true;
            expect(res.status.calledWith(200)).to.be.true;
            expect(returnJson.called).to.be.true;
            //expect(returnJson.calledWith({fakePost})).to.be.true;

            //check the callback/next function never gets called
            //expect(next.notCalled).to.be.true;
             
         })       
    })


});

//Unit test example: https://betterprogramming.pub/writing-unit-tests-for-your-nodejs-api-13257bd0e46b