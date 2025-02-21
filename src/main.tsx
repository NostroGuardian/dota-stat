import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ChakraProvider } from '@/components/ui/provider';
import { App } from './App';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</StrictMode>
);
