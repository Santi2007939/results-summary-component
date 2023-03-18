import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faBrain, faComment, faEye } from '@fortawesome/free-solid-svg-icons';
import '../Style-sheets/Tarjeta.css'

export default function Tarjeta(props) {

    let word = '';
    let lowOrHigh = '';
    let percentage = 0;

    function resultado(props) {
        let respuesta = (props.firstResult + props.secondResult + props.thirdResult + props.fourthResult)/4;
        if (respuesta - parseInt(respuesta) >= .5) {
            return parseInt(respuesta) + 1;
        }
        return parseInt(respuesta);
    }

    if (resultado(props) == 100) {
        word = 'Magnifique';
        lowOrHigh = 'higher';
        percentage = 95;
    } else if (resultado(props) >= 75) {
        word = 'Great';
        lowOrHigh = 'higher';
        percentage = resultado(props) - 11;
    } else if (resultado(props) >= 50) {
        word = 'Good';
        lowOrHigh = 'higher';
        percentage = resultado(props) - 11;
    } else if (resultado(props) >= 25) {
        word = 'Not Good';
        lowOrHigh = 'lower';
        percentage = resultado(props) + 25;
    } else {
        word = 'Bad';
        lowOrHigh = 'lower';
        percentage = resultado(props) + 25;
    }

    

    return(
        <div className='Card'>
           <div className={`Card__results ${resultado(props) >= 50 ? 'purple' : 'black'}`}>
                <h1 className="Card__results__title">Your Result</h1>
                <div className="Card__results__circle">
                    <h3 className="Card__results__circle__number">{resultado(props)}</h3>
                    <p className="Card__results__circle__of">of 100</p>
                </div>
                <h2 className="Card__results__word">
                    {word}
                </h2>
                <p className="Card__results__text">
                    You scored {lowOrHigh} than {percentage}% of the people who have taken these tests.
                </p>
           </div>
           <div className="Card__info">
                <h1 className="Card__info__title">
                    Summary
                </h1>
                <div className={`Card__info__type ${props.firstResult >= 50 ? 'red' : 'black'}`}>
                    <div className='todo'><span className='Card__info__type__icon'><FontAwesomeIcon icon={faBolt} /></span> Reaction </div><div className='Card__info__type__text'><span className={`Card__info__type__text__value${props.firstResult >= 50 ? '' : 'black'}`}>{props.firstResult}</span><span className={`Card__info__type__text__percentage${props.firstResult >= 50 ? '' : 'black'}`}> / 100</span></div>
                </div>
                <div className={`Card__info__type ${props.secondResult >= 50 ? 'yellow' : 'black'}`}>
                    <div className='todo'><span className='Card__info__type__icon'><FontAwesomeIcon icon={faBrain} /></span> Memory </div><div className='Card__info__type__text'><span className={`Card__info__type__text__value${props.secondResult >= 50 ? '' : 'black'}`}>{props.secondResult}</span><span className={`Card__info__type__text__percentage${props.secondResult >= 50 ? '' : 'black'}`}> / 100</span></div>
                </div>
                <div className={`Card__info__type ${props.thirdResult >= 50 ? 'green' : 'black'}`}>
                    <div className='todo'><span className='Card__info__type__icon'><FontAwesomeIcon icon={faComment} /></span> Verbal </div><div className='Card__info__type__text'><span className={`Card__info__type__text__value${props.thirdResult >= 50 ? '' : 'black'}`}>{props.thirdResult}</span><span className={`Card__info__type__text__percentage${props.thirdResult >= 50 ? '' : 'black'}`}> / 100</span></div>
                </div>
                <div className={`Card__info__type ${props.fourthResult >= 50 ? 'blue' : 'black'}`}>
                    <div className='todo'><span className='Card__info__type__icon'><FontAwesomeIcon icon={faEye} /></span> Visual </div><div className='Card__info__type__text'><span className={`Card__info__type__text__value${props.fourthResult >= 50 ? '' : 'black'}`}>{props.fourthResult}</span><span className={`Card__info__type__text__percentage${props.fourthResult >= 50 ? '' : 'black'}`}> / 100</span></div>
                </div>
                <button className='Card__info__button'>Continue</button>
           </div>
        </div>
    )
} 