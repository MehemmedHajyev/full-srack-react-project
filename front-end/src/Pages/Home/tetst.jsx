import React, { useEffect, useMemo } from "react";

export  function memo () {


    useEffect(() => {
        console.log("Effect hook trigered");
        submit();
    }, []);

    const submit = () => {
        console.log("submit is invoked");
        return 2;
    };

    const result = useMemo(submit, [submit]);

    return (
        <div>
            <button
                className="increase"
            >
                Increase counter
            </button>
        </div>
    );
}