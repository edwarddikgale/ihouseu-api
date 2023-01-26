import Posts from '../models/Posts';
import {IPost} from '../models/IPost';
import {getPost} from './posts';
import {expect} from 'chai';
import sinon from 'sinon';
import { assert } from 'chai';

describe("Posts Controller Unit Tests", function (){

    this.afterEach(()=>{
        sinon.restore();
    })
    describe("Get User functionality", function(){
        it("Should throw an error if a post with this ID is not found", async function(){
   
           const fakePost = {_id:"1", title: "Test1", body: "Body 1", date: new Date()};      
           const mockPost = sinon.mock(Posts);
           mockPost.expects('findOne').withArgs({_id: 1}).yields(null, null);

           await getPost({_id:1}, {}, () => {})
            .catch((error) =>{
                expect(error.message).to.be.length.greaterThan(0);
            });
           
            
        })
        it("Should return correct post if a post with matching id exists", async function(){
   
            const fakePost = {_id:"1", title: "Test1", body: "Body 1", date: new Date()};      
            const mockPost = sinon.mock(Posts);
            const callBackSpy = sinon.spy();
            mockPost.expects('findOne').withArgs({_id: 1}).yields(); //null, fakePost);
            await getPost({_id:1}, {}, callBackSpy);

            expect(callBackSpy).to.have.been.calledOnce;

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
             });*/
            
             
         })        
    })


});

//Unit test example: https://betterprogramming.pub/writing-unit-tests-for-your-nodejs-api-13257bd0e46b