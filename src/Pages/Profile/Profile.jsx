import { useDispatch,useSelector } from "react-redux";
import { toggleShowNameAction,changeUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {

    const { userName, showName } = useSelector(profileSelector);
    const dispatch = useDispatch();
    const handeClick = () => {
        dispatch(toggleShowNameAction());
    }
    const handleUserNameChange = (e) => {
    dispatch(changeUserNameAction(e.target.value))
    };
    return (
        <div>
            <button onClick={handeClick}>Show name</button>
            <div>{showName && userName}</div>
            <input value={userName} onChange={handleUserNameChange}></input>
        </div>)
}

