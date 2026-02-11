import React from 'react';

const MessageBox = ({ text, className = "", textClassname = "" }) => {
    return (
        <div className={`flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg ${className}`}>
            <div className={`text-xl font-semibold ${textClassname}`}>
                {text}
            </div>
        </div>
    );
};

export default MessageBox;
