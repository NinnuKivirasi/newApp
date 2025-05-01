import { 
  IonButton,
  IonContent, 
  IonHeader, 
  IonIcon,
  IonPage, 
  IonPopover, 
  IonText, 
  IonTitle, 
  IonToolbar } from '@ionic/react';
import './Home.css';
import { useState, useEffect } from 'react';
import { heartOutline } from 'ionicons/icons';

const Page1: React.FC = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [catFact, setCatFact] = useState("");

    useEffect(() => {
        if (showPopover) {
        fetchCatFact();
        }
    }, [showPopover]);

    const fetchCatFact = async () => {
        try {
        const response = await fetch("https://meowfacts.herokuapp.com/?count=1");
        const data = await response.json();
        setCatFact(data.data[0]); // Extracts the cat fact from API response
        } catch (error) {
        console.error("Error fetching cat fact:", error);
        setCatFact("Failed to load cat fact.");
        }
    };

    return (
        <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Fun facts about cats!</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",}}>
            <IonButton shape='round' color='danger' onClick={() => setShowPopover(true)}>
              Get Cat Fact!
              <IonIcon slot="end" icon={heartOutline} />
              </IonButton>
            
            <IonPopover
            isOpen={showPopover}
            onDidDismiss={() => setShowPopover(false)}>
            <IonContent className="ion-padding">
                <IonText>{catFact || "Loading..."}</IonText>
            </IonContent>
            </IonPopover>
            <p></p>
            <img src="https://cataas.com/cat" 
            style={{ borderRadius: "50%" }}/>
        </IonContent>
        </IonPage>
    );
    };

export default Page1;