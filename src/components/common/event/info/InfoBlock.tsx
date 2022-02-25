import React from 'react';
import EventInfoCell from "./EventInfoCell";
import EventInfoSeparator from "./EventInfoSeparator";

interface EventInfoBlockProps {
    discount: number,
    endTimestamp: number
}

const InfoBlock = React.memo<EventInfoBlockProps>(({
    discount,
    endTimestamp
}) => {
    return (
        <div className="rounded-2xl bg-gray-900
                        flex flex-col px-4 py-6 w-80
                        lg:flex-row lg:px-6 lg:py-4 lg:w-full"
        >
            <EventInfoCell name="Distributed tokens" description="Amount of tokens to distribute">
                100 SOL
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Discount" description="Value">
                {discount}%
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Vesting period" description="Duration after tokens will be unlocked">
                7 days
            </EventInfoCell>
            <EventInfoSeparator/>
            <EventInfoCell name="Expiration time" description="Expires">
                {new Date(endTimestamp).toDateString()}
            </EventInfoCell>
        </div>
    );
});

export default InfoBlock;