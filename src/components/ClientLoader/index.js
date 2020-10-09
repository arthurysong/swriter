import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Client from '../Client';
import { getUser } from '../../actions';
import PacmanLoader from 'react-spinners/PacmanLoader';
import qs from 'qs';
import './ClientLoader.scss';

const ClientLoader = ({ history }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const queryObject = qs.parse(history.location.search.substring(1));
        // console.log(queryObject);
        // if (queryObject.state === process.env.REACT_APP_GITHUB_STATE) {
        //     console.log("Connect the github account in API");
        //     // dispatch(connectGitHub())
        //     setTimeout(() => {
        //         console.log("User in Express is connected to GitHub");
        //         dispatch(getUser(queryObject, history, setLoading))
        //     }, 400)

        // } else if (queryObject.state === process.env.REACT_APP_MEDIUM_STATE) {
        //     // console.log(history.location.search.substring(1));
        //     dispatch(getUser(queryObject, history, setLoading));
        // }
        dispatch(getUser(queryObject, history, setLoading));
    }, [])

    // console.log(history.location)
    if (loading) {
        return <div className="clientLoader">
            <div className="clientLoader__box">
                <div className="clientLoader__text">Loading your ideas :)</div>
                <PacmanLoader css="margin-left: 70px;" loading={loading} color="#26a65b" size="32px" margin="4px"/>
            </div>
        </div>
    }
    return <Client />
}

export default ClientLoader
