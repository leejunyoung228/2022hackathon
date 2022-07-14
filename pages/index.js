import Footer from '../components/footer'
import Header from '../components/Header'
import Map from '../components/map'
import Main from '../components/main'
import {Route, Routes, Link} from 'react-router-dom';
export default function Index() {
  return (
    <div>
      <Header />
      <Map/>
    </div>
  )
}
