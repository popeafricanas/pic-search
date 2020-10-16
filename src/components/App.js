import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'


//const App = () => {
    class App extends React.Component{

        state = {images: []};
       
        //console.log(term)
        // axios.get('https://api.unsplash.com/search/photos',{
        //     params: {
        //         query: term
        //     },    
        //     headers:{
        //         Authorization: 'Client-ID cdAmuck-3I5MjeIqMxBayQvoziDZoCa_Sq64kbYlhZk'
        //     }

        // }).then( response => {
        //     console.log(response.data.results)
        // });
        onSearchSubmit = async (term) => {
            const response = await unsplash.get('/search/photos',{
                params: {
                    query: term
                },    
                
            });

            this.setState({images: response.data.results})
        }

        render(){
            return (
                <div className="ui container" style={{marginTop: '10px'}}> 
                    <SearchBar onSubmitForm={this.onSearchSubmit} />
                    <ImageList images ={this.state.images}/>
                </div>
            ) 
        }
}

export default App;

