import { 
  IonButtons, 
  IonCard, 
  IonCardContent,
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import './Home.css';

const Page1: React.FC = () => {

  return (
    <>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Welcome to Page #1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonCard>

            <IonCardContent text-center>
            <img alt="Silhouette of mountains" src="https://cataas.com/cat" />

          </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </>
  );
}

export default Page1;