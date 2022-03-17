import React from "react";

constructor(){
    super();
    this.state={
        input:{},
        msg:{}
    };
}



pwdConfirm(e){
    var inputpwd=this.state.input;
    inputpwd[e.target.id]=e.target.value;
    this.setState({
        inputpwd
    });
}

validation(){
    var msg={};
}




class Comparepwd extends React.Component{
    render()
    {

      

        return(
            <div>
                <form>
                <div className="inputBx">
                      {/* <span>password : </span> */}

                      <input type='password' 
                      placeholder="password" 
                       onChange={this.changePassword}
                      value={this.state.password}
                      className='own'
                      id='pwd'
                      required
                      />
                  </div>
                    

                  <div className="inputBx">
                      {/* <span>password : </span> */}

                      <input type='password' 
                      placeholder="Conform password" 
                       //  onChange={this.changePassword}
                      // value={this.state.password}
                      className='own'
                      id='conpwd'
                      required
                      />
                  </div> 

                  <div >
                <input type='submit' className="btn" value='SIGN UP ME'/>
                </div>
                </form>
            </div>
        )
    }
}