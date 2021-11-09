import React, {useState} from "react";
import {Container, Search} from "./styles";	
import TextField, {Input} from '@material/react-text-field';
import logo from "../../assets/logo.svg";	
const Home = () => {
    const [inputValue, setInputValue] = useState('cachorro');
  return <Container>
      <Search>
          <img src={logo}  alt="Logo pesqisar restaurantes"/>
          <TextField
          label='Pesquisar'
          outlined
        //  onTrailingIconSelect={() => this.setState({value: ''})}
          //trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        >
            <Input
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
          </Search>
      </Container>;
};


export default Home;