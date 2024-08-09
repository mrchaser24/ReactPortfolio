import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import "./header.css"

export default function Header() {
    const router = useRouter()
    let [currentRoute, setCurrentRoute] = useState(1)
    
    function routeTo(route: number){
        // check and set current route
        setCurrentRoute(route)

        // implement navigation to route
        console.log(`Navigating to ${route}`);
        if (route === 1) return router.push('/', {scroll: false});
        if (route === 2) return router.push('/about', {scroll: false});
        if (route === 3) return router.push('/skill', {scroll: false});
        if (route === 4) return router.push('/project', {scroll: false});
        if (route === 5) return router.push('/resume', {scroll: false});
        return router.push('/', {scroll: false})
    }

    function routeButtonRender(name: string, page: number){
        return (
            <button className={currentRoute === page?"btn-navs selected-page":"btn-navs"} onClick={()=>routeTo(page)}>
                {name.toUpperCase()}
            </button>
        )
    }

    useEffect(() => {
        routeTo(currentRoute)
    }, []);

    return (
        <div className="header flex justify-between items-center py-3 px-5" style={{'userSelect':'none'}}>
            <div className="logo" style={{cursor:'pointer'}} onClick={()=>routeTo(1)}>CHASE</div>
            <div className="navigation">
                {routeButtonRender('Home', 1)}
                {routeButtonRender('About', 2)}
                {routeButtonRender('Skills', 3)}
                {routeButtonRender('Project', 4)}
                {routeButtonRender('Resume', 5)}
            </div>
            <div className="contact">
                <button className="contact-btn">Hire me!</button>
            </div>
        </div>
    );
}