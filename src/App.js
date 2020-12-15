import React, {useState} from 'react';
import TrayNumber from "./TrayNumber/TrayNumber";
import Tray from "./Tray/Tray";
import TrayPlaceholder from "./TrayPlaceholder/TrayPlaceholder";
import Modal from "./Modal/Modal";
import Card from "./Card/Card";
import TrayText from "./TrayText/TrayText";

import './App.css';

const DETERGENTS = [
    {id: '1', name: 'Persil'},
    {id: '2', name: 'Ariel'},
    {id: '3', name: 'Spee'},
    {id: '4', name: 'Haka'},
    {id: '5', name: 'Weißer Riese'},
    {id: '6', name: 'Sodasan'},
]

function App() {

    const [currentTray, setCurrentTray] = useState(null);
    const [trays, setTrays] = useState([null, null, null]);

    return (
        <div className="App">
            {trays.map((detergentId, index) =>
                <Tray key={index} onClick={() => setCurrentTray(index)}>
                    <TrayNumber>{index + 1}</TrayNumber>
                    {detergentId
                        ? <TrayText>
                            {DETERGENTS.find(({id}) => id === detergentId).name}
                          </TrayText>
                        : <TrayPlaceholder>Click to select detergent ...</TrayPlaceholder>
                    }
                </Tray>)}
            {
                currentTray != null &&
                <Modal>
                    {
                        DETERGENTS.map(({id, name}) =>
                            <Card
                                onClick={() => {
                                    trays[currentTray] = id;
                                    setTrays(trays);
                                    setCurrentTray(null);
                                }}
                                key={id}
                            >{name}</Card>)
                    }
                </Modal>
            }
        </div>
    );
}

export default App;
