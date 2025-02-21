import { Provider as ChakraProvider } from '@/app/chakraSnippets/provider';
import { router } from '@/app/routing/router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	</StrictMode>
);
