import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from '../contexts/ThemeContext';

const Mermaid = ({ chart }) => {
    const [svg, setSvg] = useState('');
    const [error, setError] = useState(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const themeVariables = resolvedTheme === 'dark'
            ? {
                darkMode: true,
                background: '#0d1117',
                primaryColor: '#161b22',
                primaryTextColor: '#c9d1d9',
                primaryBorderColor: '#FFD700',
                lineColor: '#58a6ff',
                secondaryColor: '#0d1117',
                tertiaryColor: '#161b22',
                mainBkg: '#0d1117',
                nodeBorder: '#FFD700',
                clusterBkg: '#161b22',
                clusterBorder: '#FFD700',
                defaultBkg: '#0d1117',
                defaultBorder: '#FFD700',
                defaultTextColor: '#c9d1d9',
                fontFamily: 'Fira Code, monospace',
            }
            : {
                darkMode: false,
                background: '#ffffff',
                primaryColor: '#ffffff',
                primaryTextColor: '#1f2937',
                primaryBorderColor: '#ca8a04',
                lineColor: '#4b5563',
                secondaryColor: '#fef9c3',
                tertiaryColor: '#ffffff',
                mainBkg: '#ffffff',
                nodeBorder: '#ca8a04',
                clusterBkg: '#fefce8',
                clusterBorder: '#ca8a04',
                defaultBkg: '#ffffff',
                defaultBorder: '#ca8a04',
                defaultTextColor: '#1f2937',
                fontFamily: 'Fira Code, monospace',
            };

        mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables,
            securityLevel: 'loose',
            fontFamily: 'Fira Code, monospace',
            flowchart: { useMaxWidth: true, htmlLabels: true, curve: 'basis' },
        });

        const renderChart = async () => {
            try {
                const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                // Reset mermaid to ensure theme changes apply
                mermaid.contentLoaded();
                const { svg } = await mermaid.render(id, chart);
                setSvg(svg);
                setError(null);
            } catch (err) {
                console.error('Mermaid render error:', err);
                setError('Failed to render diagram');
            }
        };

        if (chart) {
            renderChart();
        }
    }, [chart, resolvedTheme]);

    if (error) return <div className="text-red-500 font-mono text-sm p-4 border border-red-500 rounded">{error}</div>;

    return (
        <div
            className="mermaid-diagram my-8 flex justify-center bg-gray-50 dark:bg-terminal-bg p-4 rounded-lg border border-gray-200 dark:border-terminal-gold/30 overflow-x-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};

export default Mermaid;
