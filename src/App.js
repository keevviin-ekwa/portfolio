import './App.css';
import SectionTile from './component/sectionTile.component';

function App() {
  return (
    <div className="App">
       <div className='container'>
          <div className='avatar'></div> 
          <div className='name'>
            <span className='complet_name'>EKWA NDE BAYARD KEVIN</span><br/>
            <span className='role'>Ingenieur SI developpeur</span>
        
          </div>
           <div className='left-side'>
            <SectionTile title="Profils"/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
           </div>
           <div className='rigth-side'>
           <SectionTile title="Profils"/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
            <SectionTile/>
           </div>
       </div>
    </div>
  );
}

export default App;
