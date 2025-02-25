import { IonContent, 
         IonHeader, 
         IonPage, 
         IonTitle, 
         IonToolbar,
         IonSearchbar,
         IonItem,
         IonSelect,
         IonSelectOption,
         IonList,
         IonLabel,
         IonAlert,
         useIonAlert,
         IonLoading,
         useIonLoading,
         IonAvatar,
         IonImg,
         IonIcon
        } from '@ionic/react';
import './Home.css';
import useApi, { searchResult, SearchType } from '../hooks/useApi';
import { useEffect, useState } from 'react';
import { gameControllerOutline, tvOutline, videocamOutline } from 'ionicons/icons'

const Home: React.FC = () => {

const {searchData} = useApi()

const [searchTerm, setSearchTerm] = useState ('');
const [type, setType] = useState<SearchType>(SearchType.all);
const [results, setResults] = useState<searchResult[]>([]);
const [presentAlert] = useIonAlert();
const [loading, dismiss] = useIonLoading();

useEffect(() => {
    if (searchTerm === ''){
      setResults([])
      return;
    }
    const loadData = async () => {
      await loading()
      const result: any = await searchData(searchTerm, type);
      console.log("api result: ",result)
      await dismiss()
      if (result?.Error){
          presentAlert(result.Error)
      } else{
        setResults(result.Search)
      }
    }

    loadData();

}, [searchTerm, type]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Api App (my movie app)</IonTitle>
          </IonToolbar>
        </IonHeader>
      <IonContent>
        <IonSearchbar value={searchTerm}
        debounce={300} 
        onIonChange={(e) => setSearchTerm(e.detail.value!)}
        ></IonSearchbar>
        <IonItem>
          <IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)} label = "Select Searchtype ">
            <IonSelectOption value=""> All</IonSelectOption>
            <IonSelectOption value="movie"> Movie</IonSelectOption>
            <IonSelectOption value="series"> Series</IonSelectOption>
            <IonSelectOption value="episode"> Episode</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonList>
          {results.map((item: searchResult) => (
             <IonItem button key={item.imdbID} routerLink={`/movies/${item.imdbID}`} >
              <IonAvatar slot='start'>
                <IonImg src={item.Poster} />
              </IonAvatar>  
              <IonLabel className="ion-text-wrap">{item.Title}</IonLabel>

              {item.Type === 'movie'  && <IonIcon slot = 'end' icon = {videocamOutline} />}
              {item.Type === 'series'  && <IonIcon slot = 'end' icon = {tvOutline} />}
              {item.Type === 'game'  && <IonIcon slot = 'end' icon = {gameControllerOutline} />}

             </IonItem>   
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
