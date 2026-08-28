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

    // Limite de segurança para evitar DoS do navegador
    const MAX_CODE_LENGTH = 100 * 1024;

    // Whitelist estrita de linguagens permitidas
    const ALLOWED_LANGUAGES = new Set([
        'javascript', 'html', 'css', 'json', 'xml',
        'java', 'csharp', 'bash', 'powershell', 'python'
    ]);

    if (!formatBtn || !clearBtn || !codeInput || !langSelect || !codeOutput || !errorBox) {
        console.error('[SecError] Elementos vitais do DOM não foram encontrados.');
        return;
    }

    formatBtn.addEventListener('click', processCode);
    clearBtn.addEventListener('click', clearAll);

    function processCode() {
        const rawCode = codeInput.value;
        let language = langSelect.value;

        hideError();

        // 1. Validação de presença
        if (!rawCode.trim()) {
            codeOutput.textContent = '// Nenhum código fornecido para processamento.';
            return;
        }

        // 2. Proteção contra DoS (tamanho do arquivo)
        if (rawCode.length > MAX_CODE_LENGTH) {
            showError(`Erro de Segurança: O código excede o limite máximo permitido (${MAX_CODE_LENGTH / 1024} KB).`);
            return;
        }

        // 3. Validação estrita da linguagem (Sanitização do parâmetro)
        if (!ALLOWED_LANGUAGES.has(language)) {
            language = 'javascript';
        }

        let formattedCode = rawCode;

        // Formatação via Prettier
        if (window.prettier && window.prettierPlugins) {
            const xmlPlugin = window.prettierPlugins.xml || window.xmlPlugin;

            const prettierParsers = {
                javascript: { parser: 'babel', plugin: window.prettierPlugins.babel },
                html: { parser: 'html', plugin: window.prettierPlugins.html },
                css: { parser: 'css', plugin: window.prettierPlugins.postcss },
                json: { parser: 'json', plugin: window.prettierPlugins.babel },
                xml: xmlPlugin ? { parser: 'xml', plugin: xmlPlugin } : null
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
                    const firstLine = err.message.split('\n')[0];
                    showError(`O código inserido contém erro de sintaxe em ${language}: ${firstLine}`);
                    return;
                }
            }
        }

        // Atribuição segura ao DOM (previne DOM XSS)
        codeOutput.className = `language-${encodeURIComponent(language)}`;
        codeOutput.textContent = formattedCode;

        // Realce de sintaxe
        if (window.Prism && window.Prism.highlightElement) {
            window.Prism.highlightElement(codeOutput);
        }
    }

    function clearAll() {
        codeInput.value = '';
        const safeLang = ALLOWED_LANGUAGES.has(langSelect.value) ? langSelect.value : 'javascript';
        codeOutput.className = `language-${safeLang}`;
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