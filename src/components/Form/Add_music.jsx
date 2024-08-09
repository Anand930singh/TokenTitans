import React, { useState } from "react";
import axios from "axios";
import { ethers } from "ethers";
import "./Add_music.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const pinataApiKey = import.meta.env.VITE_PINATA_API_KEY;
const pinataSecretApiKey = import.meta.env.VITE_PINATA_API_SECRET;
const contractAddress = "0x47F487Ac42CB6BfbfDf31f5c475474A43Ce830d3";
import { abi } from "../../../abi";

const Add_music = ({ onClose }) => {
  const [artistName, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [title, setTitle] = useState("");
  const [dateOfCreation, setDateOfCreation] = useState("");
  const [category, setCategory] = useState("pop");
  const [mp3File, setMp3File] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Artist Name:", artistName);
    console.log("Album Name:", albumName);
    console.log("Title:", title);
    console.log("Date of Creation:", dateOfCreation);
    console.log("Category:", category);
    console.log("MP3 File:", mp3File);
    console.log("Thumbnail:", thumbnail);

    try {
      // Upload file to Pinata
      const fileUrl = await uploadToPinata(mp3File, artistName);

      // Construct the metadata for the NFT
      const metadata = {
        name: title,
        description: `Music by ${artistName} from the album ${albumName}`,
        image: thumbnail ? await uploadToPinata(thumbnail, artistName) : "",
        audio: fileUrl,
      };

      // Upload metadata to Pinata
      const metadataUrl = await uploadJSONToPinata(metadata);

      // Mint the NFT
      await mintNFT();
    } catch (error) {
      console.error("Error minting NFT:", error);
      alert("Failed to mint NFT. Please try again.");
    }
  };

  const uploadToPinata = async (file, artist) => {
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

    let data = new FormData();
    data.append("file", file);
    data.append(
      "pinataMetadata",
      JSON.stringify({
        name: file.name,
        keyvalues: {
          artist: artist,
        },
      })
    );

    const headers = {
      "Content-Type": "multipart/form-data",
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log("File uploaded:", response.data);
      return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const uploadJSONToPinata = async (json) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    const headers = {
      "Content-Type": "application/json",
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
    };

    try {
      const response = await axios.post(url, json, { headers });
      console.log("JSON uploaded:", response.data);
      const res = await axios.post("http://localhost:8000/store", {
        IpfsHash: response.data.IpfsHash,
        PinSize: response.data.PinSize,
        Timestamp: response.data.Timestamp,
      });
      

      console.log("Data stored in MongoDB:", res.data);

      return `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
    } catch (error) {
      console.error("Error uploading JSON:", error);
      throw error;
    }
  };

  const mintNFT = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);

    try {
      const transaction = await contract.safeMint(signer.getAddress());
      await transaction.wait(); // Wait for the transaction to be mined
      console.log("Transaction:", transaction);

      alert("NFT minted successfully!");
    } catch (error) {
      console.error("Error minting NFT:", error);
      alert("Failed to mint NFT. Please try again.");
      throw error;
    }
  };

  return (
    <div className="form-popup">
      <div className="form-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 className="form-popup-title">Add New Music</h2>
        <form className="mint-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="artistName">Artist Name</label>
                <input
                  type="text"
                  id="artistName"
                  placeholder="Enter artist name"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="albumName">Album Name</label>
                <input
                  type="text"
                  id="albumName"
                  placeholder="Enter album name"
                  value={albumName}
                  onChange={(e) => setAlbumName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfCreation">Date of Creation</label>
                <input
                  type="date"
                  id="dateOfCreation"
                  value={dateOfCreation}
                  onChange={(e) => setDateOfCreation(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-column">
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  {/* Add other categories as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mp3File">MP3 File</label>
                <input
                  type="file"
                  id="mp3File"
                  accept=".mp3"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, setMp3File)}
                  required
                />
                <label htmlFor="mp3File" className="custom-file-label">
                  {mp3File ? mp3File.name : "Choose MP3 File"}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="thumbnail">Thumbnail</label>
                <input
                  type="file"
                  id="thumbnail"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleFileChange(e, setThumbnail)}
                  required
                />
                <label htmlFor="thumbnail" className="custom-file-label">
                  {thumbnail ? thumbnail.name : "Choose Thumbnail"}
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="mint-button">
            Mint
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_music;
