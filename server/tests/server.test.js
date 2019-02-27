const expect = require('expect')
const request = require('supertest')

const {app} =require('./../server1')
const {usertodo}= require('./../models/usertodo')

const todos =[{
  username: "k1"
},{
  username:"k2"
}]

beforeEach((done)=>{
  usertodo.remove({}).then(()=> {
    return usertodo.insertMany(todos)
  }).then(()=>done())
})


describe('POST/usertodo',()=>{
  it('sholud create',(done)=>{
    var username ='kalal'

    request(app)
    .post('/usertodo')
    .send({username})
    .expect(200)
    .expect((res)=>{
      // console.log(res.body);
      expect(res.body.username).toBe(username)
    })
    .end((err,res)=>{
      if(err){
        return done(err)
      }
      usertodo.find({username}).then((usertodolist)=>{
        expect(usertodolist.length).toBe(1)
        expect(usertodolist[0].username).toBe('kalal')
        done()
      }).catch((e)=>done(e))
    })
  })

  describe('GET/todos',()=>{
    it('sholud get all todos',(done)=>{
      request(app)
      .get('/usertodo')
      .expect(200)

      .expect((res)=>{
        // console.log(res.body);
        expect(res.body.usertodo.length).toBe(2)
      })
      .end(done)
    })
  })
})
