import React from 'react'
import Card from 'react-bootstrap/Card';
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import pic7 from './pic7.jpg'
import pic8 from './pic8.jpg'
import pic9 from './pic9.jpg'
import pic10 from './pic10.jpg'
import pic11 from './pic11.jpg'
import './CardS.css'


const CardS = () => {
    return (
        <div>
            <>
                <div className='Movies'>
                <Card className='movie'>
                    <img src={pic4}
                        alt='VIOLENT NIGHT'></img>
                    <Card.Body>
                        <Card.Title>VIOLENT NIGHT</Card.Title>
                        <Card.Text>
                            Le soir de Noël, quand un groupe de mercenaires entre par effraction sur la propriété d’une famille aisée qu’ils prennent en otage, ils vont devoir affronter un adversaire auquel ils ne s’attendaient pas : Le Père Noël est dans la place et il va leur montrer que ce bon vieux Saint Nicolas a plus d’un tour dans sa hotte.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99810?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">10:10</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99819?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">12:35</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99819?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">22:20</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VOSTER</div>
                            </div>
                        </div>

                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic5}
                        alt='LE MENU'></img>
                    <Card.Body>
                        <Card.Title>LE MENU</Card.Title>
                        <Card.Text>
                            Sur une île isolée, un jeune couple pénètre dans un restaurant gastronomique ayant une très bonne réputation. Le chef se lance alors dans un menu sompteux assorti à quelques surprises stupéfiantes...
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99786?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">17:40</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VOSTER</div>
                            </div>
                        </div>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99786?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">21:10</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic6}
                        alt='BLACK PANTHER: WAKANDA FOREVER'></img>
                    <Card.Body>
                        <Card.Title>BLACK PANTHER: WAKANDA FOREVER</Card.Title>
                        <Card.Text>
                            La Reine Ramonda, Shuri, M’Baku, Okoye et les Dora Milaje luttent pour protéger leur nation des ingérences d’autres puissances mondiales après la mort du roi T’Challa. Alors que le peuple s’efforce d’aller de l’avant, nos héros vont devoir s’unir et compter sur l’aide de la mercenaire Nakia et d’Everett Ross pour faire entrer le royaume du Wakanda dans une nouvelle ère.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99737?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">17:45</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic7}
                        alt='ENZO LE CROCO'></img>
                    <Card.Body>
                        <Card.Title>ENZO LE CROCO</Card.Title>
                        <Card.Text>
                            Quand la famille Primm déménage à New York, leur jeune fils Josh peine à s'adapter à sa nouvelle école et à ses nouveaux camarades. Tout cela change quand il découvre Enzo - un crocodile chanteur qui aime les bains, le caviar et la musique - et qui vit dans le grenier de sa nouvelle maison.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99831?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">13:05</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic8}
                        alt='LA CONSPIRATION DU CAIRE / BOY FROM HEAVEN'></img>
                    <Card.Body>
                        <Card.Title>LA CONSPIRATION DU CAIRE / BOY FROM HEAVEN</Card.Title>
                        <Card.Text>
                            Adam, simple fils de pêcheur, intègre la prestigieuse université Al-Azhar du Caire, épicentre du pouvoir de l'Islam sunnite. Le jour de la rentrée, le Grand Imam à la tête de l'institution meurt soudainement. Adam se retrouve alors, à son insu, au cœur d'une lutte de pouvoir implacable entre les élites religieuse et politique du pays.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99801?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">18:40</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VOSTER</div>
                            </div>
                        </div>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99801?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">20:05</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VOSTER</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic9}
                        alt='AVATAR : LA VOIE DE L EAU'></img>
                    <Card.Body>
                        <Card.Title>AVATAR : LA VOIE DE L'EAU</Card.Title>
                        <Card.Text>
                            Se déroulant plus d’une décennie après les événements relatés dans le premier film, AVATAR : LA VOIE DE L’EAU raconte l’histoire des membres de la famille Sully (Jake, Neytiri et leurs enfants), les épreuves auxquelles ils sont confrontés, les chemins qu’ils doivent emprunter pour se protéger les uns les autres, les batailles qu’ils doivent mener pour rester en vie et les tragédies qu’ils endurent.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/100088?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">10:50</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/100088?siteToken=5f6b8rt77q32ht0wpbasexgjr4    " onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">15:40</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VOSTER</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic10}
                        alt='LA PUCE Á L OREILLE'></img>
                    <Card.Body>
                        <Card.Title>LA PUCE Á L'OREILLE</Card.Title>
                        <Card.Text>
                            Raymonde Chandebise soupçonne son mari d'adultère. Elle lui tend un piège en lui donnant rendez-vous anonymement à l’hôtel du Minet-Galant. Monsieur Chandebise répond à l'appel en y envoyant son fidèle ami Tournel, mais il ne sait pas que le garçon d'étage, Poche, est son sosie.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://ticketing.eu.veezi.com/purchase/99976?siteToken=5f6b8rt77q32ht0wpbasexgjr4" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">18:30</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>

                <Card className='movie'>
                    <img src={pic11}
                        alt='BELLE ET SÉBASTIEN : NOUVELLE GÉNÉRATION'></img>
                    <Card.Body>
                        <Card.Title>BELLE ET SÉBASTIEN : NOUVELLE GÉNÉRATION</Card.Title>
                        <Card.Text>
                            Sébastien, 10 ans, passe ses vacances à contrecœur à la montagne chez sa grand-mère et sa tante. Il doit donner un coup de main à la bergerie, rien de bien excitant pour un garçon des villes comme lui… Mais c’est sans compter sur sa rencontre avec Belle, une chienne immense et maltraitée par son maître.
                        </Card.Text>
                        <div class="movie-times">
                            <div class="session-container">
                                <a href="https://www.pathe.tn/tunis/movie/belle-et-sbastien--nouvelle-gnration" onclick="ga('dTracker.send', 'event', 'booking', 'cinema', '17:45');">
                                    <span class="time ">10:20</span>
                                </a>
                                <div class="attributes" data-toggle="tooltip" title data-original-title="Version française">VF</div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <br/>
                </div>
            </>
        </div>
    )
}

export default CardS
