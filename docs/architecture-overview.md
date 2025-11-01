---
description: System Layers
---

# ⚙️ Architecture Overview

```
[User Layer]
 ├── Artists
 ├── Fans
 └── Investors

[Application Layer]
 ├── Web App (TuneCent Platform)
 ├── Mobile App
 └── API Gateway

[Blockchain Layer]
 ├── Smart Contracts (ERC-20 / ERC-721 / ERC-1155)
 ├── Token Royalty Logic
 └── Decentralized Ledger for Transactions
```

**Smart Contract Roles**

| Role                | Function                         |
| ------------------- | -------------------------------- |
| Artist Contract     | Registers songs and ownership    |
| Token Contract      | Mints and distributes tokens     |
| Royalty Contract    | Automates reward distribution    |
| Governance Contract | Allows DAO-based decision-making |
