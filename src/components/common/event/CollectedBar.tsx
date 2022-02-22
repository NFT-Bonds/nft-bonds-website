import React from 'react';
import CompletedBar from "./bar/CompletedBar";
import ProgressingBar from "./bar/ProgressingBar";


interface CollectedBarProps {
    collected: number
    total: number
}

const CollectedBar = React.memo<CollectedBarProps>(({
    total,
    collected
}) => {
    const isCompleted = collected == total
    return (
        <div className="w-full xs:max-w-[750px]">
            <div className="font-archivo font-bold text-white opacity-90 mb-1 text-right">
                {isCompleted
                    ? "Completed"
                    : `${collected} / ${total}`
                }
            </div>
            {isCompleted
                ? <CompletedBar/>
                : <ProgressingBar/>
            }
        </div>
    );
});

export default CollectedBar;