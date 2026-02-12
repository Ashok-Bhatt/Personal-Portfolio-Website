import { createContext, useContext, useRef, useState, useEffect } from "react";
import { navigation } from "../constants/index.js";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const navigationRefs = useRef({});
    const [navPointer, setNavPointer] = useState(0);

    const setNavigation = (index) => {
        setNavPointer(index);
        window.location.href = navigation[index].link;
    };

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = navigation.findIndex(({ id }) => navigationRefs.current[id] === entry.target);
                    if (index !== -1) {
                        setNavPointer(index);
                    }
                }
            });
        }, { threshold: 0.6 });

        navigation.forEach(({ id }) => {
            if (navigationRefs.current[id]) {
                observer.observe(navigationRefs.current[id]);
            }
        });

        return () => {
            navigation.forEach(({ id }) => {
                if (navigationRefs.current[id]) {
                    observer.unobserve(navigationRefs.current[id]);
                }
            });
        };
    }, []);

    return (
        <NavigationContext.Provider value={{ navigation, setNavigation, navPointer, setNavPointer, navigationRefs }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (context === undefined || context === null) {
        throw new Error("useNavigation must be used within a NavigationProvider");
    }
    return context;
};

export default NavigationProvider;