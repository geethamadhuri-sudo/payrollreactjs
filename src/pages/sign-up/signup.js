import {Link} from 'react-router-dom';
import * as ROUTES from '../../consants/routes';
import styles from './signup.module.css'

export default function SignUp(){
    return(
       <div className="container">
            <div className="row">
           <div className="col-md-6">
               <p>...paragraph</p>
               </div>
           <div className="col-md-6">
           <div className={styles.bordercss}>
          
               
               <form>
                   <div className="form-group">
                       <label>Full Name :</label>
                       <input type="text" className="form-control" placeholder="fullname"/>
                   </div>
                   <div className="form-group">
                       <label>Email  :</label>
                       <input type="text" className="form-control" placeholder="email"/>
                   </div>
                   <div className="form-group">
                       <label>password  :</label>
                       <input type="text" className="form-control" placeholder="email"/>
                   </div>
                   <div className="form-group">
                       <label>Date of birth  :</label>
                       <input type="date" className="form-control" placeholder="email"/>
                   </div>
                 <div className={styles.labelmove}>
                     <label>choose a  designation <span>  :</span></label>
                     <select name="designation" id="desg">
                         <option value="0">select</option>
                         <option value="Manager">Manager</option>
                         <option value="TeamLeader">TeamLeader</option>
                         <option value="Exceutive">Exceutive</option>
                     </select>
                 </div>
                 <div className={styles.buttonmove} >
                     <button type="submit" className="btn btn-primary">Register</button>
                     <div className={styles.mattercss}> 
               Already have an account ? <Link to={ROUTES.LOGIN}>SignIn</Link>
           </div>
                 </div>
               </form>
               </div>
         
           
           </div>
           </div>
       </div>
    )
}