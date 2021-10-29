import HomeCarousel from './HomeCarousel';
import Footer from './Footer';

export default function Home(props) {
  return (
    <div>
      <HomeCarousel />
      <Footer  addItem={props.addItem} items={props.items}/>
    </div>
  )
}
