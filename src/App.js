import 'bulma/css/bulma.css'; //when we dont want to assign to a variable, omit the variable
import ProfileCard from "./ProfileCard";
import alexaImage from './images/alexa.png';
import cortanaImage from './images/cortana.png';
import siriImage from './images/siri.png';

console.log(alexaImage);
console.log(siriImage);
function App(){
    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal Digital Assistants</p>
                </div>
            </section>
           
        

            <div className='container'>
                <section className='section'>
                    <div className='columns'>
                        <div className='column is-4'>
                            <ProfileCard 
                            title = 'Alexa' 
                            handle = '@alexa99' 
                            imgSrc = {alexaImage}
                            content='Alexa is a chatbot created by Amazon using speech regconition.'
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                            title = 'Cortana' 
                            handle = '@cortana32'
                            imgSrc = {cortanaImage}
                            content='Cortana is a chatbot created by Microsoft'
                            />
                        </div>
                        <div className='column is-4'>
                            <ProfileCard 
                            title = 'Siri' 
                            handle = '@siri01' 
                            imgSrc = {siriImage}
                            content='Siri is a chatbot created by Apple'
                            />
                        </div>
                    </div>
                </section>
            </div>
            
        </div>
    )   
}

export default App