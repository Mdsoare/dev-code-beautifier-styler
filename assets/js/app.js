/**
 * Application: Estilizador & Formatador de Código Seguro
 * DevSecOps Best Practices: Self-hosted Vendor Libs, Defensive Execution, DOM Sanitization
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const formatBtn = document.getElementById('formatBtn');
    const clearBtn = document.getElementById('clearBtn');
    const codeInput = document.getElementById('codeInput');
    const langSelect = document.getElementById('langSelect');
    const codeOutput = document.getElementById('codeOutput'); // CORRIGIDO: const adicionado
    const errorBox = document.getElementById('errorBox');

    if (!formatBtn || !clearBtn || !codeInput || !langSelect || !codeOutput || !errorBox) {
        console.error('[SecError] Elementos vitais do DOM não foram encontrados.');
        return;
    }

    formatBtn.addEventListener('click', processCode);
    clearBtn.addEventListener('click', clearAll);

    function processCode() {
        const rawCode = codeInput.value;
        const language = langSelect.value;

        hideError();

        if (!rawCode.trim()) {
            codeOutput.textContent = '// Nenhum código fornecido para processamento.';
            return;
        }

        let formattedCode = rawCode;

        // Formatação estrutural via Prettier (Linguagens suportadas no browser)
        if (window.prettier && window.prettierPlugins) {

            // Mapeamento dinâmico de plugins (incluindo plugin de XML se carregado)
            const xmlPlugin = window.prettierPlugins.xml || window.xmlPlugin;

            const prettierParsers = {
                javascript: { parser: "babel", plugin: window.prettierPlugins.babel },
                html: { parser: "html", plugin: window.prettierPlugins.html },
                css: { parser: "css", plugin: window.prettierPlugins.postcss },
                json: { parser: "json", plugin: window.prettierPlugins.babel },
                xml: xmlPlugin ? { parser: "xml", plugin: xmlPlugin } : null
            };

            if (prettierParsers[language] && prettierParsers[language].plugin) {
                try {
                    const config = prettierParsers[language];
                    formattedCode = window.prettier.format(rawCode, {
                        parser: config.parser,
                        plugins: [config.plugin],
                        semi: true,
                        singleQuote: false,
                        tabWidth: 2
                    });
                } catch (err) {
                    showError(`Erro de Sintaxe (${language}): ${err.message.split('\n')[0]}`);
                    return;
                }
            }
        }

        // Sanitização contra DOM XSS: Atribuição estrita via textContent
        codeOutput.className = `language-${language}`;
        codeOutput.textContent = formattedCode;

        // Aplica realce sintático (PrismJS)
        if (window.Prism && window.Prism.highlightElement) {
            window.Prism.highlightElement(codeOutput);
        }
    }

    function clearAll() {
        codeInput.value = '';
        codeOutput.className = `language-${langSelect.value}`;
        codeOutput.textContent = '// O código estruturado aparecerá aqui...';
        hideError();
        codeInput.focus();
    }

    function showError(message) {
        errorBox.textContent = message;
        errorBox.style.display = 'block';
    }

    function hideError() {
        errorBox.style.display = 'none';
        errorBox.textContent = '';
    }
});