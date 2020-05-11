import React from "react";
import './Style_Contact_Book.css'
function searchingFor(term) {
    return function(x) {
return x.lastName.toLowerCase().includes(term.toLowerCase()) || !term;
    }

}
class Contracts extends React.Component {
        contacts = [{
            firstName: "Барней",
            lastName: "Стинсовский",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робин",
            lastName: "Щербатская",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Аномный",
            lastName: "Анонимус",
            phone: "+380666666666"
        }, {
            firstName: "Лилия",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршэн",
            lastName: "Эриксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбэс",
            phone: "+380956319521",
            gender: "male"
        }];


    getFirstName() {
        return (
            this.state.contacts.filter(searchingFor(this.state.term)).map((i) => (
                <p>{i.firstName}</p>
            )))
    }
    getLastName(){
        return(
            this.state.contacts.filter(searchingFor(this.state.term)).map((i)=>(
                <p>{i.lastName}</p>
                )
            )
        )
    }
    getPhone(){
        return(
            this.state.contacts.filter(searchingFor(this.state.term)).map((i)=>(
                    <p>{i.phone}</p>
                )
            )
        )
    }
constructor(props){
        super(props);
        this.state ={
            contacts: this.contacts,
            term: '',

        };

        this.searchHandler = this.searchHandler.bind(this);
}
    searchHandler(event){
this.setState({term: event.target.value})
    }
    render() {
        return (
            <div className={'t'}>
                <form>
                    <input type="text" onChange={this.searchHandler} value={this.term}/>
                </form>
                <div className={'i'}>  {this.getFirstName()} </div>
                <div className={'u'}> {this.getLastName()}</div>
                <div> {this.getPhone()}</div>
            </div>

        );
    }
}
export default Contracts
