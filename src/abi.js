export default [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_isStore",
				"type": "bool"
			},
			{
				"name": "_region",
				"type": "string"
			},
			{
				"name": "_isClinic",
				"type": "bool"
			}
		],
		"name": "PushDesObjectNhapKho",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_code",
				"type": "string"
			},
			{
				"name": "_prescriber",
				"type": "string"
			},
			{
				"name": "_customer",
				"type": "string"
			}
		],
		"name": "PushDocument",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_isStore",
				"type": "bool"
			},
			{
				"name": "_region",
				"type": "string"
			},
			{
				"name": "_isClinic",
				"type": "bool"
			}
		],
		"name": "PushSrcObjectBanHang",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_isProvider",
				"type": "bool"
			}
		],
		"name": "PushSrcObjectNhapKho",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_partNumber",
				"type": "string"
			},
			{
				"name": "_count",
				"type": "int256"
			},
			{
				"name": "_isSpecialControl",
				"type": "bool"
			},
			{
				"name": "_isPrescriptionDrup",
				"type": "bool"
			},
			{
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"name": "_antibiotic",
				"type": "bool"
			}
		],
		"name": "PushStockBanHang",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_partNumber",
				"type": "string"
			},
			{
				"name": "_count",
				"type": "int256"
			},
			{
				"name": "_isSpecialControl",
				"type": "bool"
			},
			{
				"name": "_isPrescriptionDrup",
				"type": "bool"
			},
			{
				"name": "_timestamp",
				"type": "uint256"
			},
			{
				"name": "_antibiotic",
				"type": "bool"
			}
		],
		"name": "PushStockNhapKho",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetAllBanHang",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isStore",
						"type": "bool"
					},
					{
						"name": "region",
						"type": "string"
					},
					{
						"name": "isClinic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "code",
						"type": "string"
					},
					{
						"name": "prescriber",
						"type": "string"
					},
					{
						"name": "customer",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "partNumber",
						"type": "string"
					},
					{
						"name": "count",
						"type": "int256"
					},
					{
						"name": "isSpecialControl",
						"type": "bool"
					},
					{
						"name": "isPrescriptionDrup",
						"type": "bool"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"name": "antibiotic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_u",
				"type": "address"
			}
		],
		"name": "GetAllBanHangByAddress",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isStore",
						"type": "bool"
					},
					{
						"name": "region",
						"type": "string"
					},
					{
						"name": "isClinic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "code",
						"type": "string"
					},
					{
						"name": "prescriber",
						"type": "string"
					},
					{
						"name": "customer",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "partNumber",
						"type": "string"
					},
					{
						"name": "count",
						"type": "int256"
					},
					{
						"name": "isSpecialControl",
						"type": "bool"
					},
					{
						"name": "isPrescriptionDrup",
						"type": "bool"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"name": "antibiotic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetAllNhapKho",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isProvider",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isStore",
						"type": "bool"
					},
					{
						"name": "region",
						"type": "string"
					},
					{
						"name": "isClinic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			},
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "partNumber",
						"type": "string"
					},
					{
						"name": "count",
						"type": "int256"
					},
					{
						"name": "isSpecialControl",
						"type": "bool"
					},
					{
						"name": "isPrescriptionDrup",
						"type": "bool"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"name": "antibiotic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetDesObjectNhapKho",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isStore",
						"type": "bool"
					},
					{
						"name": "region",
						"type": "string"
					},
					{
						"name": "isClinic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetDocument",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "code",
						"type": "string"
					},
					{
						"name": "prescriber",
						"type": "string"
					},
					{
						"name": "customer",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_u",
				"type": "address"
			}
		],
		"name": "GetDocumentByAddress",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "code",
						"type": "string"
					},
					{
						"name": "prescriber",
						"type": "string"
					},
					{
						"name": "customer",
						"type": "string"
					}
				],
				"name": "",
				"type": "tuple"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetSrcObjectBanHang",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isStore",
						"type": "bool"
					},
					{
						"name": "region",
						"type": "string"
					},
					{
						"name": "isClinic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetSrcObjectNhapKho",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "isProvider",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetStockBanHang",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "partNumber",
						"type": "string"
					},
					{
						"name": "count",
						"type": "int256"
					},
					{
						"name": "isSpecialControl",
						"type": "bool"
					},
					{
						"name": "isPrescriptionDrup",
						"type": "bool"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"name": "antibiotic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetStockNhapKho",
		"outputs": [
			{
				"components": [
					{
						"name": "_u",
						"type": "address"
					},
					{
						"name": "_id",
						"type": "string"
					},
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "partNumber",
						"type": "string"
					},
					{
						"name": "count",
						"type": "int256"
					},
					{
						"name": "isSpecialControl",
						"type": "bool"
					},
					{
						"name": "isPrescriptionDrup",
						"type": "bool"
					},
					{
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"name": "antibiotic",
						"type": "bool"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]