import styled from "styled-components"
import Template from "./Template"
import Texts from './Texts'
import SectionImage from '../assets/image/section-two.png'
import ImageTemplate from "./ImageTemplate"
import {FaAngleRight} from "react-icons/fa6"
import ImageOne from '../assets/image/section-two.png'
import ImageTwo from '../assets/image/section-three.png'
import ImageThree from '../assets/image/section-four.png'
import ImageFour from '../assets/image/section-five.png'
import ImageFive from '../assets/image/section-six.png'
import ImageSix from '../assets/image/section-seven.png'
const SectionTwo = ()=> {

    const imageStyle = {
        width: '200px',
        height: '200px',
        borderRadius: '10px',
        border: '2px solid #ccc',
      };
    return (
        
        <>
            <Container>
                <Template texts={<Texts header="Your phone + our app + a debit card = a simpler life." para="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves." link="Open An Account in Minutes"/>} image={SectionImage} arrow={`${<FaAngleRight />}`}/>
                <ImageTemplate image={ImageOne} styling={{}}/>
            </Container>
            <Container>
                <ImageTemplate image={ImageTwo} styling={{maxWidth:'430px'}}/>
                <Template texts={<Texts header="It’s your money, we just help you manage it." para="Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that."/>} />
            </Container>
            <Container>
                <Template texts={<Texts header="Save money as you spend it, seriously." para="You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow." link="See all our Savings"/>} image={SectionImage} arrow={`${<FaAngleRight />}`}/>
                <ImageTemplate image={ImageThree} styling={{maxWidth:'430px'}}/>
            </Container>
            <Container>
                <ImageTemplate image={ImageFour} styling={{maxWidth:'430px'}}/>
                <Template texts={<Texts header="Turn off access, turn on safety." para="Life happens. Milk spills. Debit cards go missing. If that ever happens, you can block your missing card on the app so no one can use it. We’d like to see them try." link="Learn more about Cards"/>} />
            </Container>
            <Container>
                <Template texts={<Texts header="We’re always happy to help you." para="You can chat with us on the app, slide into our DMs, tweet, leave an Instagram comment, send an email or call. However you choose to reach out, there’ll always be a friendly person there to make your life easy." link="Get Help"/>} image={SectionImage} arrow={`${<FaAngleRight />}`}/>
                <ImageTemplate image={ImageFive} styling={{maxWidth:'430px'}}/>
            </Container>
            <Container>
                <ImageTemplate image={ImageSix} styling={{maxWidth:'430px'}}/>
                <Template texts={<Texts header="Fees as clear as glass." para="We’re serious about free banking, and we will never, ever charge you for anything without your consent." link="See all our fees"/>} />
            </Container>
        </>
    )
}
export default SectionTwo

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 200px;
`