```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
      Note right of browser: no other request data changed in browser
    activate server
    server-->>browser: HTML document with added note
    deactivate server

```