import React from 'react';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {creacteDemande,getcomptes} from "../../actions/projectactions"



class Form extends React.Component{
    constructor(){
        super()

        this.state={
            motif: "",
            status: "",
            compte:{}
        }
        this.onChange = this.onChange.bind(this);  
        this.onSubmit = this.onSubmit.bind(this); 
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newDemande ={
            motif: this.state.motif,
            status: this.state.status,
            compte:JSON.parse(this.state.compte)
        }

        this.props.creacteDemande(newDemande, this.props.history)
    }

    componentDidMount(){
        this.props.getcomptes();
    }

    render(){
        const {comptes} = this.props.compte;
        return(
            <div class="content mt-3" >
            <div class="animated fadeIn">

                <div class="row">

                    <div class="col-xs-6 col-sm-6">
                        <div class="card">
                            <div class="card-header">
                                <strong>Veuillez remplir ces champs</strong> <small> </small>
                            </div>
             <form onSubmit={this.onSubmit}>

             
                            <div class="card-body card-block">
                                <div class="form-group">
                                    <label class=" form-control-label" >Acount Number</label>
                                     <div class="card-body">

                                <select data-placeholder="Choose a Number..." defaultValue={'-1'}  class="standardSelect" tabindex="1" name="compte" onChange={this.onChange}>
                                <option value="-1" disabled>Numéro de compte</option>
                                {comptes.map(compte => (
                                 <option value={JSON.stringify(compte)}  key={compte.numCompte}>{compte.numCompte}</option>))}
                                </select>
                            </div>
                                    
                        </div>

                           

                                <div class="form-group">
                                    <label class=" form-control-label">Pattern</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-phone"></i></div>
                                        <input class="form-control" 
                                        name="motif"
                                        value={this.state.motif}
                                        onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                        <small class="form-text text-muted">ex. xxxxxx</small>
                                </div>
                                <div class="form-group">
                                    <label class=" form-control-label">Status</label>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i class="fa fa-usd"></i></div>
                                        <input class="form-control" 
                                        name="status"
                                        value={this.state.status}
                                        onChange={this.onChange.bind(this)}
                                        />
                                    </div>
                                    <small class="form-text text-muted">ex. bxxxxxx</small>
                                </div>

                                <input type="submit" value="ajouter"></input>
                                
                                
                            </div>
        </form>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
        )
    }
}

Form.propTypes = {
    creacteDemande : PropTypes.func.isRequired,
    compte:PropTypes.object.isRequired,
    getcomptes : PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    compte: state.compte

})

export default connect(mapStateToProps, {creacteDemande,getcomptes})(Form);