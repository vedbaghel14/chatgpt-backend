Core Concept Behind the Memory ArchitectureShort-Term Memory (STM): Managed via a rolling Redis cache buffer and database-backed sliding window session context. This keeps the immediate conversation snippet ($k$ past exchanges) active in the LLM's prompt context window for natural, fast-paced dialogue.Long-Term Memory (LTM): Handled via a Vector Database (e.g., Pinecone / MongoDB Atlas Vector Search). When a user inputs a query, relevant historical contexts, user preferences, and older abstract facts are retrieved using semantic similarity search (embeddings) and injected into the system prompt.🤖 MindSync: ChatGPT Clone with Dual-Stage Memory (MERN)MindSync is an advanced ChatGPT clone built on the MERN stack. Unlike basic conversational interfaces, this application implements a custom Dual-Stage Memory Architecture combining Short-Term Memory (STM) for localized conversation threads and Long-Term Memory (LTM) using vector embeddings to preserve abstract user facts, preferences, and long-form history across sessions.✨ Key Features🧠 Short-Term Memory (STM): Implements a sliding-window mechanism capturing the immediate context of the current session, ensuring fast, contextually accurate responses without overflowing LLM context tokens.🗄️ Long-Term Memory (LTM): Asynchronous background processing translates older conversation milestones into semantic vector embeddings. Relevant long-form memories are dynamically injected based on user intent.⚡ Real-Time Streaming: Fluid UI text-streaming using Server-Sent Events (SSE) or WebSockets for an authentic ChatGPT-style typing experience.📂 Multi-Thread Chat Management: Complete workspace interface enabling users to create, rename, and delete chat rooms, completely synchronized with persistent storage.🎨 Responsive Tailwind Design: A highly polished, responsive web layout mirroring modern AI dashboards—built with native CSS layouts and customized dark-mode themes.🏗️ Architecture & Memory TopologyThe system splits memory management into dynamic high-speed retrieval layers and long-term analytical persistence layers:Plaintext     
               +-------------------------------------------+
               |               React Client                |
               +-------------------+-----------------------+
                                   | (Prompt Input)
                                   v
               +-------------------+-----------------------+
               |            Express API Gateway            |
               +-------------------+-----------------------+
                                   |
         +-------------------------+-------------------------+
         | (Fetch Current Window)                            | (Semantic Vector Query)
         v                                                   v
+--------+----------------+                         +--------+----------------+
|   Short-Term Memory     |                         |    Long-Term Memory    |
| - Redis Buffer Cache    |                         | - Vector Embeddings    |
| - Recent Context (10k)  |                         | - Historical Facts     |
+--------+----------------+                         +--------+----------------+
         |                                                   |
         +-------------------------+-------------------------+
                                   | (Injected Context Matrix)
                                   v
                     +-------------+-------------+
                     |    Large Language Model   |
                     +---------------------------+
                     
The Ingestion Flow: User sends a message -> Gateway queries STM for the trailing thread window -> Gateway simultaneously sends embeddings of the message to the Vector DB to surface relevant historical contexts (LTM).Context Compilation: LTM facts + STM threads + System Prompts are compiled into an optimized prompt payload and passed to the LLM.The Consolidation Phase: Periodic background workers parse old conversations, summarize redundant threads, and write them permanently into the Vector Space while flushing expired STM entries.🛠️ Tech StackFrontend: React, Tailwind CSS v4, Vite, Axios, React Context API.Backend: Node.js, Express.js.Database & Storage: MongoDB (User accounts & message logs), Redis (Short-term cache layer).Vector Engine: Pinecone / MongoDB Atlas Vector Search (For semantic LTM retrieval).AI Integration: OpenAI API / LangChain framework (Text generation & text-embedding models).
