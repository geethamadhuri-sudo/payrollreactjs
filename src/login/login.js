export default function Login(){
return(
   <div className="container">
       <div className="row">
           <div className="col-md-6">
               <p>Paragraph..</p>
           </div>
           <div className="col-md-6">
               <form>
                   <div className="form-group">
                       <label>Username</label>
                       <input type="text" className="form-control" placeholder="Username"/>
                   </div>
                   <div className="form-group">
                       <label>Password</label>
                       <input type="text" className="form-control" placeholder="Password"/>
                   </div>
                   <div>
                       <button type="submit" className="btn btn-primary">SignIn</button>
                   </div>
               </form>
           </div>
       </div>
   </div>
)
}