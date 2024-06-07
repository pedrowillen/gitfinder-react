import './styles.css';

const Form = ({ user, onChangeFunction, onClickFunction }) => {
    return (
        <>
            <input name="user" value={user} onChange={onChangeFunction} placeholder="@username" />
            <button onClick={onClickFunction}>Search</button>
        </>
    );
}

export default Form;

