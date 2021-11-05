import { useDispatch,useSelector } from "react-redux";
import { toggleShowNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {

    const { name, showName } = useSelector(profileSelector);
    const dispatch = useDispatch();
    const handeClick = () => {
        dispatch(toggleShowNameAction());
    }

    return (
        <div>
            <button onClick={handeClick}>Show name</button>
            <div>{showName && name}</div>
        </div>)
}

