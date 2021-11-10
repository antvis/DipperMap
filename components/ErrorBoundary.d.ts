import React from 'react';
export default class ErrorBoundary extends React.Component<any, {
    hasError: boolean;
}> {
    state: {
        hasError: boolean;
    };
    componentDidCatch(): void;
    render(): React.ReactNode;
}
