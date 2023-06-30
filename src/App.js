import ProfileCard from "./ProfileCard";
import alexaImage from './images/alexa.png';
import cortanaImage from './images/cortana.png';
import siriImage from './images/siri.png';

console.log(alexaImage);
console.log(siriImage);
function App(){
    return(
        <div>
            <div>Personal Digital Assistants</div>
            <img src = {alexaImage} />
            <img src = "https://picsum.photos/200/300" />
            <ProfileCard title = 'Alexa' handle = '@alexa99'/>
            <ProfileCard title = 'Cortana' handle = '@cortana32'/>
            <ProfileCard title = 'Siri' handle = '@siri01'/>
        </div>
    )
}

export default App