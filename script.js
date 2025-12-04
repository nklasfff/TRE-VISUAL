// Content database - TRE altid stort, nu med sclerose-mode
const content = {
    circles: {
        tre: {
            klient: {
                title: "TRE - Tension & Trauma Releasing Exercises",
                text: "TRE er en simpel metode hvor du gennem 7 øvelser aktiverer kroppens naturlige rystemekanisme. Når du tremorer (ryster), hjælper det din krop med at slippe spændinger og komme i balance. Det er som når dyr ryster efter en farlig situation - det hjælper nervesystemet med at vende tilbage til ro."
            },
            fagfolk: {
                title: "TRE - Klinisk Perspektiv",
                text: "TRE aktiverer neurogene tremor gennem systematisk muskeltrætning, primært i psoas og ben-muskulatur. Metoden faciliterer autonomt nervesystem-regulering uden at kræve narrativ processing af trauma. Effektiv som standalone eller integreret i eksisterende terapeutisk praksis."
            },
            videnskab: {
                title: "TRE - Neurobiologisk Mekanisme",
                text: "TRE inducerer neurogen tremor via muskel-spindle aktivering og proprioceptiv feedback. Tremor faciliterer polyvagal regulering, completion af incomplete defensive responses, og reorganisering af sensomotoriske mønstre associeret med traumatisk stress. Dokumenteret effekt på HPA-akse og autonomt nervesystem."
            },
            sclerose: {
                title: "TRE for Mennesker med Sclerose",
                text: "TRE kan hjælpe med at reducere muskelspasticitet og kronisk spænding der ofte følger med sclerose. Tremor arbejder mildt med nervesystemet uden at udmatte kroppen. Mange med sclerose oplever forbedret søvn, mindre smerte og bedre energiniveau. Metoden er skånsom og kan tilpasses din aktuelle tilstand og energi."
            }
        },
        polyvagal: {
            klient: {
                title: "Polyvagal Teori - Dit Nervesystem",
                text: "Din krop har tre forskellige 'gear': Ro og fordøjelse (grøn), alarm og kamp/flugt (gul), og nedlukning (rød). Når du tremorer, hjælper det din krop med at skifte fra alarm eller nedlukning tilbage til det grønne gear, hvor du kan føle dig sikker og forbundet."
            },
            fagfolk: {
                title: "Polyvagal Teori - Autonomt Nervesystem",
                text: "Stephen Porges' teori beskriver tre fylogenetiske lag: ventral vagal (social engagement), sympatisk (mobilisering), dorsal vagal (immobilisering). TRE faciliterer bevægelse fra sympatisk hyperarousal eller dorsal shutdown tilbage til ventral vagal regulering gennem neuroceptive signaler om sikkerhed."
            },
            videnskab: {
                title: "Polyvagal Teori - Neurofysiologi",
                text: "Vagalt modulerede kardiale og respiratoriske mønstre reflekterer autonomt nervesystem-tilstand. Tremor aktiverer afferent vagal signalering, hvilket nedregulerer amygdala-respons og faciliterer præfrontal korteks engagement. Respiratory sinus arrhythmia (RSA) forbedres, indikerende for øget vagal tone."
            },
            sclerose: {
                title: "Nervesystem-Regulering ved Sclerose",
                text: "Sclerose påvirker nervesystemet dybt - både gennem sygdommens fysiske effekt på nerveceller og gennem den kroniske stress ved at leve med sygdommen. TRE hjælper nervesystemet med at finde ro-tilstanden, hvilket kan reducere inflammation, forbedre immunfunktion og give bedre symptomkontrol. Når nervesystemet er i ro-tilstand, fungerer kroppens selvhelingsmekanismer bedre."
            }
        },
        narrative: {
            klient: {
                title: "Narrativ - Din Historie",
                text: "Den historie du fortæller om dig selv - 'jeg er altid anspændt', 'jeg kan ikke slappe af' - sidder i din krop. Når kroppen ændrer sig gennem tremor, kan din historie om dig selv også ændre sig. Du opdager: 'Jeg KAN faktisk slappe af', 'Min krop VED hvordan'."
            },
            fagfolk: {
                title: "Narrativ Psykologi - Identitetstransformation",
                text: "Autobiografisk narrativ er embodied og tilstandsafhængig. Når autonomt nervesystem reguleres (polyvagal shift), åbnes nye narrative muligheder. TRE faciliterer somatisk re-authoring uden eksplicit verbal processing - kroppen 'fortæller' en ny historie gennem direkte erfaring."
            },
            videnskab: {
                title: "Narrativ Neuroscience - Neural Reorganisering",
                text: "Autobiografisk hukommelse konstrueres gennem hippocampus-neocortex interaktion, moduleret af amygdala og autonomt nervesystem-tilstand. State-dependent retrieval betyder at narrativ tilgængelighed ændres med fysiologisk tilstand. TRE-induceret regulering faciliterer reconsolidation af traumatisk narrativ."
            },
            sclerose: {
                title: "Din Sclerose-Historie",
                text: "At leve med sclerose former hvordan du ser dig selv: 'jeg er syg', 'min krop svigter mig', 'jeg er begrænset'. TRE giver kroppen direkte oplevelser af at være kompetent - den KAN regulere sig selv, den KAN slippe spænding, den KAN finde ro. Disse nye kropserfaringer skaber gradvist en ny historie: 'Min krop har ressourcer', 'Jeg kan påvirke min tilstand'. Narrativ transformation gennem embodied erfaring."
            }
        },
        enactivisme: {
            klient: {
                title: "Enactivisme - Aktiv Healing",
                text: "Din healing sker ikke ved at 'grave noget gammelt op' eller 'få noget ud'. I stedet SKABER du aktivt noget nyt hver gang du tremorer. Din krop lærer - gennem at gøre det - at den kan regulere sig selv. Det er som at lære at cykle: kroppen forstår gennem handling."
            },
            fagfolk: {
                title: "Enactivisme - Autopoietisk Reorganisering",
                text: "Varelas enactive cognition: perception og handling er uadskillige. TRE er ikke ekstraktion af 'lagret' materiale men aktiv enactment af ny sensomotorisk organisation. Tremor er autopoietisk proces - selvskabende, ikke symptom-reducerende. Healing emergerer gennem embodied handling."
            },
            videnskab: {
                title: "Enactivisme - Dynamiske Systemer",
                text: "Autopoietisk teori beskriver levende systemer som selvorganiserende, operationelt lukkede netværk. TRE faciliterer emergent reorganisering af sensomotoriske attraktorer gennem perturbation af eksisterende mønstre. Tremor er ikke discharge men kontinuerlig structural coupling mellem organisme og miljø."
            },
            sclerose: {
                title: "Aktiv Læring med Sclerose",
                text: "Med sclerose er nervesystemet skadet, men neuroplasticitet betyder at nye veje kan dannes. TRE er ikke passiv behandling men aktiv træning af nervesystemets evne til selvregulering. Hver gang du tremorer, øver kroppen sig i at finde ro, slippe spasticitet, og organisere bevægelse på nye måder. Det er ikke om at 'fikse' noget ødelagt - det er om at skabe nye funktionelle mønstre inden for de muligheder der er."
            }
        },
        levine: {
            klient: {
                title: "Somatic Experiencing - Fuldførelse",
                text: "Når noget skræmmende sker, forbereder kroppen sig på at kæmpe eller flygte - men ofte blev det afbrudt. Den energi 'sidder fast'. Tremor hjælper kroppen med at fuldføre den bevægelse den skulle have lavet dengang. Det er som at færdiggøre en sætning der blev afbrudt midt i."
            },
            fagfolk: {
                title: "Somatic Experiencing - Trauma-completion",
                text: "Peter Levines SE model: trauma opstår når defensive orienting responses forbliver incomplete. TRE faciliterer discharge af 'frozen' survival energy gennem neurogen tremor. Titration og pendulering mellem aktivering og ro reorganiserer sensomotoriske mønstre associeret med traumatisk immobilisering."
            },
            videnskab: {
                title: "Somatic Experiencing - Neurobiologisk Completion",
                text: "Incomplete defensive responses vedligeholder sympatisk hyperarousal eller dorsal immobilization via brainstem reflexer. TRE aktiverer completion af motoriske programmer gennem periaqueductal gray (PAG) og central pattern generators. Tremor faciliterer shift fra defensive til exploratory circuits."
            },
            sclerose: {
                title: "Fuldførelse af Stress-respons ved Sclerose",
                text: "Sclerose-diagnosen og sygdomsforløbet er i sig selv traumatisk - pludselig usikkerhed, tab af kontrol, medicinsk intervention. Kroppen kan sidde fast i forsvarsmønstre: kronisk alarm eller nedlukning. TRE hjælper med at fuldføre disse afbrudte stress-reaktioner. Når kroppen får lov til at færdiggøre defensive mønstre gennem tremor, kan den bevæge sig videre til tilstande af ro og regenerering - essentielt for immunfunktion og symptomhåndtering."
            }
        },
        reich: {
            klient: {
                title: "Bioenergetik - Muskulært Panser",
                text: "Når livet er hårdt, spænder vi kroppen som beskyttelse - og glemmer at slippe igen. Det bliver til mønstre i musklerne ('panser') der holder følelser og energi tilbage. Tremor hjælper musklerne med at slippe de gamle mønstre, så energi og følelser kan bevæge sig frit igen."
            },
            fagfolk: {
                title: "Bioenergetik - Character Armor",
                text: "Reich og Lowens teori om character armor: kroniske muskelspændinger embodier psykologisk forsvar. TRE faciliterer mildnelse af armor gennem neurogen tremor, hvilket restaurerer energetisk flow og affektiv tilgængelighed. Komplementerer verbal psykoterapi ved at arbejde gennem kroppen."
            },
            videnskab: {
                title: "Bioenergetik - Fascial og Muskulær Reorganisering",
                text: "Kronisk muskelspænding modificerer fascial viscoelastiske egenskaber og proprioceptiv signalering. TRE-induceret tremor reorganiserer myofasciale holding patterns gennem rhythmisk belastning og mekanisk stimulation. Ændrer både strukturelle og neurale komponenter af 'armoring'."
            },
            sclerose: {
                title: "Spasticitet og Muskulært Panser ved Sclerose",
                text: "Sclerose skaber spasticitet gennem neurologisk skade, men oveni ligger ofte ekstra muskelspænding fra forsvar og kompensation - et 'panser' af kronisk kontraktion. TRE arbejder med begge lag: Den neurologiske spasticitet mildnes gennem nervesystem-regulering, og det psykologiske panser ('jeg må holde sammen', 'jeg må kæmpe') får lov til at slippe. Når begge typer spænding reduceres, forbedres mobilitet, smerte og energiniveau markant."
            }
        },
        psykologi: {
            klient: {
                title: "Klinisk Psykologi - Sikkerhed og Relation",
                text: "For at din krop kan slippe må du føle dig sikker. En terapeut eller guide skaber det trygge rum hvor tremor kan ske. Det handler ikke kun om teknikken - men også om at du føler dig set, hørt og accepteret. Healing sker i relationer, ikke i isolation."
            },
            fagfolk: {
                title: "Klinisk Psykologi - Terapeutisk Relation",
                text: "TRE effektivitet afhænger af terapeutisk alliance og co-regulering. Providers embodied tilstedeværelse faciliterer klientens neuroceptive oplevelse af sikkerhed (polyvagal). Integration af somatisk arbejde med psykologisk forståelse af attachment, dissociation og titration. Relationel neurobiologi i praksis."
            },
            videnskab: {
                title: "Klinisk Psykologi - Interpersonal Neurobiology",
                text: "Terapeutisk relation modificerer klientens autonomt nervesystem via social engagement system (ventral vagal). Terapeuts egen regulering co-regulerer klient gennem mirror neurons og interbrain synchrony. TRE effectiveness medieres af attachment security og therapeutic alliance quality."
            },
            sclerose: {
                title: "Terapeutisk Relation ved Sclerose",
                text: "Med sclerose er kroppen ofte et sted fyldt med svigt, smerte og frygt. At turde tremor - at turde slippe kontrol - kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE, som selv er rolig og til stede i kroppen, skaber det containment der gør transformation mulig. Relationel sikkerhed er ikke 'nice to have' men fysiologisk nødvendigt - terapeutens regulerede nervesystem co-regulerer klientens gennem tilstedeværelse og anerkendelse."
            }
        }
    },
    connections: {
        'tre-polyvagal': {
            klient: "Tremor hjælper dit nervesystem med at skifte fra alarm eller nedlukning tilbage til ro og sikkerhed.",
            fagfolk: "TRE faciliterer polyvagal regulering fra sympatisk/dorsal tilstand til ventral vagal sikkerhed.",
            videnskab: "Neurogen tremor modulerer vagal efferens og nedregulerer amygdala-respons via brainstem circuits.",
            sclerose: "Ved sclerose er nervesystemet ofte i kronisk stress-tilstand, hvilket forværrer inflammation og symptomer. TRE's tremor-mekanisme hjælper nervesystemet tilbage til ro-tilstand hvor healing og regenerering kan ske - kritisk for symptomkontrol."
        },
        'tre-narrative': {
            klient: "Når din krop tremorer og finder ro, kan du fortælle en ny historie om dig selv.",
            fagfolk: "Somatisk transformation gennem TRE faciliterer narrativ re-authoring uden verbal processing.",
            videnskab: "TRE-induceret autonomt nervesystem-regulering modificerer state-dependent narrative retrieval.",
            sclerose: "Sclerose-diagnosen skaber en dominerende narrativ: 'jeg er syg', 'kroppen svigter'. TRE giver gentagne oplevelser af kropslig kompetence - nervesystemet KAN regulere, muskler KAN slippe - som gradvist transformerer selvopfattelsen til 'jeg har ressourcer'."
        },
        'tre-enactivisme': {
            klient: "Hver gang du tremorer, skaber din krop aktivt ny viden om hvordan den kan regulere sig selv.",
            fagfolk: "TRE er enactment af ny sensomotorisk organisation, ikke ekstraktion af 'lagret' materiale.",
            videnskab: "Tremor faciliterer autopoietisk reorganisering gennem perturbation af eksisterende sensomotoriske attraktorer.",
            sclerose: "Med neurologisk skade er neuroplasticitet afgørende. TRE er ikke passiv symptombehandling men aktiv træning i selvregulering. Hver tremor-session er øvelse i at skabe nye funktionelle mønstre - kroppen lærer gennem at gøre det."
        },
        'tre-levine': {
            klient: "Tremor hjælper kroppen med at fuldføre den kamp- eller flugt-reaktion der blev afbrudt under stress.",
            fagfolk: "TRE faciliterer completion af incomplete defensive responses via neurogen discharge.",
            videnskab: "Tremor aktiverer completion af motoriske programmer gennem PAG og central pattern generators.",
            sclerose: "Sclerose-diagnosen og forløbet er traumatisk. TRE hjælper med at fuldføre de afbrudte stress-reaktioner fra diagnosetidspunkt og gentagne tilbageslag, så kroppen kan bevæge sig fra forsvar til ro - essentielt for immunfunktion."
        },
        'tre-reich': {
            klient: "Tremor hjælper de spændte muskler med at slippe gamle beskyttelsesmønstre.",
            fagfolk: "TRE mildner character armor gennem neurogen tremor, restaurerende energetisk flow.",
            videnskab: "Tremor reorganiserer myofasciale holding patterns gennem rhythmisk mekanisk stimulation.",
            sclerose: "Ved sclerose er der både neurologisk spasticitet og psykologisk muskulært panser. TRE arbejder med begge lag - mildner spasticitet gennem nervesystem-regulering og løsner det kompensatoriske panser, hvilket forbedrer mobilitet og reducerer smerte."
        },
        'tre-psykologi': {
            klient: "Med en tryg terapeut kan din krop turde tremor - sikkerhed i relationen muliggør healing.",
            fagfolk: "Terapeutisk alliance og co-regulering faciliterer TRE's effectiveness gennem neuroceptiv sikkerhed.",
            videnskab: "Providers regulerede autonome tilstand co-regulerer klient via social engagement system.",
            sclerose: "Med sclerose er kroppen ofte forbundet med svigt og frygt. At turde tremor kræver dyb sikkerhed. En terapeut der forstår både sclerose og TRE skaber det containment der gør transformation mulig - relationel sikkerhed er fysiologisk nødvendigt."
        },
        'polyvagal-narrative': {
            klient: "Når nervesystemet skifter til sikker tilstand, bliver nye måder at tænke om dig selv mulige.",
            fagfolk: "Autonomt nervesystem-tilstand påvirker hvilken narrativ der kan konstrueres og tilgås.",
            videnskab: "Autonomt nervesystem-tilstand modulerer hippocampal consolidation og præfrontal narrative integration.",
            sclerose: "I kronisk stress-tilstand dominerer katastrofe-narrativer. Når TRE bringer nervesystemet i ro, åbnes kognitivt rum for mere balanced perspektiver på sygdom og liv - fra 'kun syg' til 'lever med sclerose og har ressourcer'."
        },
        'polyvagal-enactivisme': {
            klient: "Din oplevelse af sikkerhed eller fare skabes aktivt af dig - ikke bare registreret passivt.",
            fagfolk: "Neuroception er enactive perception - aktiv bringing-forth af betydning, ikke passiv detektion.",
            videnskab: "Polyvagal neuroception demonstrerer enactive princip: autonomic evaluation og environmental response co-constitute.",
            sclerose: "Neuroception ved sclerose er ofte fejljusteret - kroppen læser konstant 'fare' selv i sikre situationer. TRE træner aktivt nervesystemet i at bringe frem oplevelser af sikkerhed - ikke om at fikse defekt detektor men skabe ny kompetence."
        },
        'polyvagal-levine': {
            klient: "Systemet skal først være i sikker tilstand før den afbrudte stress-reaktion kan fuldføres.",
            fagfolk: "Ventral vagal aktivering er forudsætning for sikker completion af incomplete defensive responses.",
            videnskab: "Polyvagal state hierarchy: freeze-discharge sekvens kræver sufficient ventral vagal tone.",
            sclerose: "Med sclerose sidder kroppen ofte fast i forsvarstilstand. TRE skal først etablere sikkerhed (ventral vagal) før traumatiske elementer fra sygdomsforløbet kan arbejdes igennem - derfor går det langsomt og mildt."
        },
        'polyvagal-reich': {
            klient: "Muskulært panser er kroppens måde at blive i alarm-tilstand.",
            fagfolk: "Character armor manifesterer kronisk sympatisk aktivering eller dorsal immobilisering.",
            videnskab: "Reichian armor er somatisk manifestation af dysreguleret autonomt nervesystem.",
            sclerose: "Spasticitet ved sclerose er delvist neurologisk, delvist autonomt nervesystem-drevet. Når TRE bringer nervesystemet i ro, reduceres den autonome komponent af spasticiteten markant."
        },
        'polyvagal-psykologi': {
            klient: "En rolig terapeut hjælper dit nervesystem med at finde ro - sikkerhed smitter relationelt.",
            fagfolk: "Terapeutens ventral vagal tilstand co-regulerer klientens nervesystem gennem social engagement.",
            videnskab: "Provider's autonomic state influences client's via ventral vagal pathways.",
            sclerose: "Ved sclerose hvor nervesystemet er dysreguleret, er co-regulering gennem terapeutisk relation afgørende. Terapeutens rolige tilstedeværelse giver nervesystemet en 'ekstern regulator' at låne fra."
        },
        'narrative-enactivisme': {
            klient: "Din livshistorie skabes gennem hvordan du lever og handler i verden.",
            fagfolk: "Narrativ identitet er autopoietisk - kontinuerligt enacted gennem lived experience.",
            videnskab: "Narrative self emergerer gennem sensomotorisk enactment.",
            sclerose: "Sclerose-identitet skabes ikke kun gennem tanker men gennem daglige handlinger. TRE giver gentagne embodied erfaringer af kompetence som gradvist omskriver den levede narrativ."
        },
        'narrative-levine': {
            klient: "Når kroppen fuldender stress-reaktionen, kan historien om 'hvad der skete' også ændre sig.",
            fagfolk: "Completion af traumatisk respons åbner for narrativ transformation.",
            videnskab: "Somatic completion modificerer episodic memory encoding.",
            sclerose: "Diagnosechok og sygdomsforløb skaber fastlåst traumatisk narrativ. Når TRE hjælper med completion af disse defensive responser, kan historien bevæge sig fra 'frossen i katastrofe' til 'jeg har overlevet og bevæger mig videre'."
        },
        'narrative-reich': {
            klient: "Hvordan du holder kroppen fortæller historien om 'hvem du må være'.",
            fagfolk: "Character armor embodier narrativ identitet - muskulær holding bærer implicit selv-historie.",
            videnskab: "Myofascial patterns encode implicit autobiographical memory.",
            sclerose: "Spasticitet og kompensatorisk holding ved sclerose embodier historien 'jeg må holde sammen', 'jeg må kæmpe'. Når TRE mildner disse holdings, ændres den implicitte selvfortælling til 'jeg kan slippe', 'jeg kan modtage støtte'."
        },
        'narrative-psykologi': {
            klient: "En god terapeut hjælper dig med at fortælle din historie på nye måder.",
            fagfolk: "Terapeutisk relation faciliterer narrativ re-authoring.",
            videnskab: "Therapeutic narrative co-construction modulates autobiographical memory reconsolidation.",
            sclerose: "Sclerose-narrativen kan blive totaliserende. En terapeut hjælper med at finde mere nuancerede historier: ikke 'jeg er syg' men 'jeg lever med sclerose og har kompleksitet, ressourcer, og værdi'."
        },
        'enactivisme-levine': {
            klient: "Kroppen lærer gennem at gøre - tremor ER læringen.",
            fagfolk: "Levines pendulering er cirkulær enactment - kontinuerlig reorganisering.",
            videnskab: "SE completion demonstrerer enactive principle: perception-action loops reorganize gennem embodied engagement.",
            sclerose: "Med neurologisk skade er gentagelse essentiel. Hver TRE-session er ikke 'behandling' men træning - kroppen øver sig i selvregulering gennem at gøre det, byggende nye neurale veje gennem praksis."
        },
        'enactivisme-reich': {
            klient: "Panseret er noget du aktivt gør hver dag - tremor lærer nye mønstre.",
            fagfolk: "Character armor er kontinuerlig autopoietisk 'holding pattern'.",
            videnskab: "Reichian armor er dynamisk process - autopoietic maintenance af defensive sensomotorisk organization.",
            sclerose: "Spasticitet ved sclerose vedligeholdes delvist gennem kontinuerlig muskulær activation. TRE lærer kroppen nye mønstre af afslappelse - ikke om at 'slå spasticitet fra' men om at enacte nye muligheder for tonus-regulering."
        },
        'enactivisme-psykologi': {
            klient: "Terapeut og klient skaber sammen et rum hvor ny måde at være kan opstå.",
            fagfolk: "Healing er co-enactment - emergent organisation gennem relationel coupling.",
            videnskab: "Therapeutic dyad constitutes autopoietic system - healing emerges gennem structural coupling.",
            sclerose: "TRE med sclerose er samskabelse: terapeut og klient finder sammen nye måder kroppen kan være på inden for sygdommens begrænsninger. Ikke om at 'fixe' klienten men co-enacte nye muligheder."
        },
        'levine-reich': {
            klient: "Den afbrudte flugt-reaktion og det muskulære panser er to sider af samme sag.",
            fagfolk: "Levines incomplete response og Reichs frozen energy beskriver samme fænomen.",
            videnskab: "SE incompletion og bioenergetisk armor refererer begge til sustained brainstem defensive activation.",
            sclerose: "Ved sclerose er der både frozen trauma-energi fra sygdomsforløbet og spastisk muskulært panser. TRE arbejder med begge: completion af afbrudte responser OG mildnelse af kronisk muskulær holding."
        },
        'levine-psykologi': {
            klient: "Kun i et trygt rum kan kroppen turde fuldføre den stress-reaktion den holder tilbage.",
            fagfolk: "Titration og pendulering kræver terapeutisk co-regulering.",
            videnskab: "SE methodology requires therapeutic containment - terapeut fungerer som external regulator.",
            sclerose: "At arbejde med traumatiske elementer af sclerose (diagnosechok, tab, usikkerhed) kræver solid terapeutisk containment. TRE-facilitator holder det sikre rum hvor activation kan emergere og resolves uden at overwhelme."
        },
        'reich-psykologi': {
            klient: "Terapeuten skal selv være afslappet og til stede i kroppen for at hjælpe dig.",
            fagfolk: "Terapeutens embodiment påvirker klientens - bioenergetisk resonans er faktisk co-regulering.",
            videnskab: "Provider's somatic state influences client via mirror neurons og autonomic synchrony.",
            sclerose: "Med sclerose hvor kroppen er spastisk og spændt, er terapeutens embodied afslappethed en kraftfuld intervention. Spejlneuroner og autonomisk synkronisering betyder at terapeutens ro direkte påvirker klientens nervesystem."
        }
    }
};

// Mapping til cirkel navne
const circleNames = {
    tre: 'TRE',
    polyvagal: 'Polyvagal teori',
    narrative: 'Wired for Story',
    enactivisme: 'Enactivisme',
    levine: 'Somatic Experiencing',
    reich: 'Bioenergetik',
    psykologi: 'Klinisk Psykologi'
};

// State management
let currentMode = 'klient';
let currentView = 'welcome'; // 'welcome', 'circle', 'connection'
let currentCircle = null;
let currentConnection = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupModeButtons();
    setupCircleClicks();
    setupConnectionClicks();
    showWelcome();
});

// Mode selector - VISUELT TYDELIGT
function setupModeButtons() {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Visual feedback
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const oldMode = currentMode;
            currentMode = btn.dataset.mode;
            
            // Flash effekt for at vise noget skete
            const infoPanel = document.getElementById('info-content');
            infoPanel.style.opacity = '0.3';
            setTimeout(() => {
                infoPanel.style.opacity = '1';
            }, 150);
            
            // Opdater indhold baseret på aktuel view
            if (currentView === 'circle' && currentCircle) {
                showCircleView(currentCircle);
            } else if (currentView === 'connection' && currentConnection) {
                showConnectionView(currentConnection.from, currentConnection.to, currentConnection.fromCircle);
            }
        });
    });
}

// Welcome screen
function showWelcome() {
    currentView = 'welcome';
    currentCircle = null;
    currentConnection = null;
    clearAllActive();
    
    document.getElementById('info-content').innerHTML = `
        <h2>Velkommen til TRE Forståelsesmodellen</h2>
        <p>Denne interaktive model viser hvordan TRE virker gennem seks forskellige perspektiver.</p>
        <p><strong>Sådan bruger du modellen:</strong></p>
        <ul>
            <li>Klik på en cirkel for at udforske det perspektiv</li>
            <li>Skift mellem niveauer øverst: Klienter, Fagfolk, Videnskabeligt, eller Sclerose</li>
            <li>Brug "Tilbage" knappen for at navigere</li>
        </ul>
    `;
}

// Circle clicks
function setupCircleClicks() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const id = circle.dataset.id;
            showCircleView(id);
        });
    });
}

// Vis cirkel view - KUN denne cirkel, liste af forbindelser
function showCircleView(circleId) {
    currentView = 'circle';
    currentCircle = circleId;
    currentConnection = null;
    clearAllActive();
    
    // Aktiver KUN denne cirkel (ikke TRE hvis det ikke er TRE)
    const circle = document.querySelector(`[data-id="${circleId}"]`);
    if (circle && circleId !== 'tre') {
        circle.classList.add('active');
    }
    
    // Vis info
    const data = content.circles[circleId][currentMode];
    const connectedCircles = getConnectedCircles(circleId);
    
    let connectionsHTML = '';
    if (connectedCircles.length > 0) {
        connectionsHTML = `
            <div class="connection-list">
                <p><strong>Se hvordan ${circleNames[circleId]} hænger sammen med:</strong></p>
                ${connectedCircles.map(targetId => {
                    const targetName = circleNames[targetId];
                    return `
                        <div class="connection-item" onclick="showConnectionView('${circleId}', '${targetId}', '${circleId}')">
                            <div class="connection-item-title">→ ${targetName}</div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showWelcome()" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">← Tilbage til oversigt</button>
        </div>
        <h2>${data.title}</h2>
        <p>${data.text}</p>
        ${connectionsHTML}
    `;
}

// Connection view
function showConnectionView(from, to, fromCircle) {
    currentView = 'connection';
    currentConnection = { from, to, fromCircle };
    clearAllActive();
    
    // Aktiver de to cirkler og linjen (men ikke TRE cirkel)
    if (from !== 'tre') {
        const circle1 = document.querySelector(`[data-id="${from}"]`);
        if (circle1) circle1.classList.add('active');
    }
    if (to !== 'tre') {
        const circle2 = document.querySelector(`[data-id="${to}"]`);
        if (circle2) circle2.classList.add('active');
    }
    
    // Find og aktiver linjen
    let line = document.querySelector(`[data-from="${from}"][data-to="${to}"]`);
    if (!line) {
        line = document.querySelector(`[data-from="${to}"][data-to="${from}"]`);
    }
    if (line) {
        line.classList.add('active');
    }
    
    // Vis connection info
    const key1 = `${from}-${to}`;
    const key2 = `${to}-${from}`;
    const connectionData = content.connections[key1] || content.connections[key2];
    
    if (!connectionData) {
        document.getElementById('info-content').innerHTML = `
            <div style="margin-bottom: 20px;">
                <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">← Tilbage til ${circleNames[fromCircle]}</button>
            </div>
            <h2>Forbindelse ikke fundet</h2>
        `;
        return;
    }
    
    const text = connectionData[currentMode];
    const fromName = circleNames[from];
    const toName = circleNames[to];
    
    document.getElementById('info-content').innerHTML = `
        <div style="margin-bottom: 20px;">
            <button onclick="showCircleView('${fromCircle}')" style="background: none; border: none; color: #447BB3; font-size: 1rem; cursor: pointer; font-family: 'Times New Roman', Times, serif;">← Tilbage til ${circleNames[fromCircle]}</button>
        </div>
        <h2>Dynamik: ${fromName} ↔ ${toName}</h2>
        <p><strong>${text}</strong></p>
    `;
}

// Globale funktioner
window.showWelcome = showWelcome;
window.showCircleView = showCircleView;
window.showConnectionView = showConnectionView;

// Find forbundne cirkler
function getConnectedCircles(circleId) {
    const allCircles = ['tre', 'polyvagal', 'narrative', 'enactivisme', 'levine', 'reich', 'psykologi'];
    return allCircles.filter(id => {
        if (id === circleId) return false;
        const key1 = `${circleId}-${id}`;
        const key2 = `${id}-${circleId}`;
        return content.connections[key1] || content.connections[key2];
    });
}

// Connection clicks (fra SVG)
function setupConnectionClicks() {
    const connections = document.querySelectorAll('.connection');
    connections.forEach(line => {
        line.addEventListener('click', (e) => {
            e.stopPropagation();
            const from = line.dataset.from;
            const to = line.dataset.to;
            // Hvis fra TRE, vis target cirkel først
            const fromCircle = from === 'tre' ? to : from;
            showConnectionView(from, to, fromCircle);
        });
    });
}

// Clear all active - TRE forbliver GRÅ
function clearAllActive() {
    document.querySelectorAll('.circle:not([data-id="tre"])').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.connection').forEach(c => c.classList.remove('active'));
}
