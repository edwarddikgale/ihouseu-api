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
    let Posts:any;
    const expect = chai.expect;
    const assert = chai.assert;
    const fakePost = {_id:"12345", title: "Test1", body: "Body 1", date: new Date()};
    let req: any;
    let res:any;
    let callBackSpy:any;

    this.afterEach(()=>{

        sandbox.restore();
        callBackSpy = sandbox.spy();
        Posts = { findOne: sinon.stub()};
        req = {params:{id: "12345"}};
        res = {
            json: sandbox.spy(),
            status: sandbox.stub().returns({json: sandbox.spy()})
        }

    })
    describe("Get User functionality", function(){
        it("Should throw an error if a post with this ID is not found", async function(){
           
            const message = 'Post not found';
            Posts.findOne.rejects(new Error(message));

            await getPost(req, res, callBackSpy)
                .catch(err => {
                    expect(err.message).to.equal(message)
                });
            //expect(1).to.equal(1);
            
        })
        it("Should return correct post if a post with matching id exists", async function(){
   
            Posts.findOne.resolves(fakePost);
            await getPost(req, res, callBackSpy);

            //check the callback/next function gets called
            expect(callBackSpy).to.have.been.calledOnce;

            // check that the correct status code was returned
            //expect(res.status.calledOnce).to.be.true;
            //expect(res.status.firstCall.args[0]).to.equal(200);

            // check that the `json` function was called
            //expect(res.json.calledOnce).to.be.true;

            //check the status of 200 is returned
            //expect(re)

            //check that the correct post was returned
            /*expect(res.send.firstCall.args[0]).to.deep.equal({
                   
            });*/
            //await getPost({_id:1}, {}, callBackSpy);
            //expect(callBackSpy).to.have.been.calledOnce;

            /*Posts.findOne({_id: 1}, (err: any, result: any) =>{
                 mockPost.verify();
                 mockPost.restore();
                 assert.equal(result, fakePost);
            })*/
            
            /*
            await getPost({_id:1}, {}, callBackSpy)
             .then((response:any) =>{
                assert.equal(response.body.title, fakePost.title);
             })
             .catch((error) =>{
                console.log(error);    
                 expect(error.message).to.be.length(0);
             });
            */
             
         })        
    })


});

//Unit test example: https://betterprogramming.pub/writing-unit-tests-for-your-nodejs-api-13257bd0e46b