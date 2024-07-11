import { useEffect } from "react";

const useClickOutside = (refs, callback) => {
    useEffect(() => {
        function handleClickOutside(event) {

            const clickedOutsideModals = refs.current.every((ref) => {
                return ref && !ref.contains(event.target);
            });

            if (clickedOutsideModals) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs, callback]);
};

export default useClickOutside;