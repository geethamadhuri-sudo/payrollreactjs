import styles from './login.module.css';
import {Link} from 'react-router-dom';
import * as ROUTES from '../consants/routes';

export default function Login(){
return(
   <div className="container">
       <div className="row">
           <div className="col-md-6">
               <p>Paragraph..</p>
           </div>
           <div className="col-md-6">
               <div className={styles.margins}>
               <form>
                   <div className="form-group">
                       <label className={styles.label}>username: </label>
                       <input type="text" className="form-control" placeholder="username"/>
                   </div>
                   <div className="form-group">
                       <label className={styles.label}>password:</label>
                       <input type="text" className="form-control" placeholder="password"/>
                   </div>
                   <div className="row">
                   <div className={styles.btn}>
                       <button type="submit" className="btn btn-primary">SignIn</button>
                     <div className={styles.account}>Don't have an account? <Link to ={ROUTES.SIGN_UP}><p className={styles.hyper}>SignUp</p></Link></div>
                   </div>
                  
                    </div>
               </form>
               </div>
           </div>
       </div>
   </div>
)
}