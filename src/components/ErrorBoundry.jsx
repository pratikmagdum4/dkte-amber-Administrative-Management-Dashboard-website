import React, { Component } from 'react';
import { toast } from 'react-toastify';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            alert("Please Refresh the page ")
            toast.info("Please Refresh the page ")
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
