/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React, { PureComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Stack, Container, Input, Typography, Button } from '@material-ui/core';
import Page from '../components/Page';
import qs from 'querystring';
import { useParams, useNavigate } from 'react-router-dom';

const api = 'http://localhost:3001';

// function EditBerita() {
//   const [judul_berita, setjudul_berita] = useState('');
//   const [tgl_berita, settgl_berita] = useState('');
//   const [isi_berita, setisi_berita] = useState('');
//   const [cover_berita, setcover_berita] = useState('');

//   const [beritaList, setBeritaList] = useState([]);

//   const addBerita = () => {
//     axios
//       .post('http://localhost:3001/tambahBerita', {
//         judul_berita: judul_berita,
//         tgl_berita: tgl_berita,
//         isi_berita: isi_berita,
//         cover_berita: cover_berita
//       })
//       .then(() => {
//         setBeritaList([
//           ...beritaList,
//           {
//             judul_berita: judul_berita,
//             tgl_berita: tgl_berita,
//             isi_berita: isi_berita,
//             cover_berita: cover_berita
//           }
//         ]);
//       });
//   };

//   const editBerita = (id_berita) => {
//     axios
//       .put('http://localhost:3001/ubahBerita', {
//         judul_berita: judul_berita,
//         tgl_berita: tgl_berita,
//         isi_berita: isi_berita,
//         cover_berita: cover_berita,
//         id_berita: id_berita
//       })
//       .then((response) => {
//         setBeritaList(
//           beritaList.map((val) => {
//             return val.id_berita === id_berita
//               ? {
//                   id_berita: val.id_berita,
//                   judul_berita: val.judul_berita,
//                   tgl_berita: val.tgl_berita,
//                   isi_berita: val.isi_berita,
//                   cover_berita: val.cover_berita
//                 }
//               : val;
//           })
//         );
//       });
//   };

//   return (
//     <Page title="Tambah Berita">
//       <Container>
//         <Typography variant="h4" mb={5} gutterBottom>
//           Edit Berita
//         </Typography>
//         {beritaList.map((val, key) => (
//           <Stack spacing={3} justifyContent="space-between">
//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               fullWidth
//               label="Tanggal Berita"
//               type="date"
//               onChange={(event) => {
//                 settgl_berita(event.target.value);
//               }}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />
//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               label="Judul Berita"
//               placeholder="Masukan Judul Berita"
//               fullWidth
//               margin="normal"
//               type="text"
//               onChange={(event) => {
//                 setjudul_berita(event.target.value);
//               }}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />
//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               label="Isi Berita"
//               placeholder="Masukan Isi Berita"
//               fullWidth
//               multiline
//               margin="normal"
//               type="text"
//               onChange={(event) => {
//                 setisi_berita(event.target.value);
//               }}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />
//             <Typography>Cover Berita</Typography>
//             <Input
//               className="form-control"
//               accept="image/*"
//               id="icon-button-file"
//               type="file"
//               onChange={(event) => {
//                 setcover_berita(event.target.value);
//               }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               component="span"
//               onClick={() => {
//                 editBerita(val.id_berita);
//               }}
//             >
//               Update
//             </Button>
//           </Stack>
//         ))}
//       </Container>
//     </Page>
//   );
// }

// class EditBerita extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       id_berita: this.props.location.id_berita,
//       judul_berita: this.props.location.judul_berita,
//       tgl_berita: this.props.location.tgl_berita,
//       isi_berita: this.props.location.isi_berita,
//       cover_berita: this.props.location.cover_berita,
//       response: '',
//       display: 'none'
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   ubahBerita = (id_berita) => {
//     const data = qs.stringify({
//       id_berita: id_berita,
//       judul_berita: this.state.judul_berita,
//       tgl_berita: this.state.tgl_berita,
//       isi_berita: this.state.isi_berita,
//       cover_berita: this.state.cover_berita
//     });

//     axios.put(api + '/ubahBerita', data).then((json) => {
//       if (json.data.status === 200) {
//         console.log(json.data.status);
//         this.setState({
//           response: json.data.values,
//           display: 'block'
//         });
//       } else {
//         this.setState({
//           response: json.data.values,
//           display: 'block'
//         });
//       }
//     });
//   };

//   render() {
//     return (
//       <Page title="Tambah Berita">
//         <Container>
//           <Typography variant="h4" mb={5} gutterBottom>
//             Edit Berita
//           </Typography>
//           <Stack spacing={3} justifyContent="space-between">
//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               fullWidth
//               label="Tanggal Berita"
//               type="date"
//               onChange={this.handleChange}
//               value={this.state.tgl_berita}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               label="Judul Berita"
//               placeholder="Masukan Judul Berita"
//               fullWidth
//               margin="normal"
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.judul_berita}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <TextField
//               className="form-control"
//               justifyContent="space-between"
//               label="Isi Berita"
//               placeholder="Masukan Isi Berita"
//               fullWidth
//               multiline
//               margin="normal"
//               type="text"
//               onChange={this.handleChange}
//               value={this.state.isi_berita}
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <Typography>Cover Berita</Typography>
//             <Input
//               className="form-control"
//               accept="image/*"
//               id="icon-button-file"
//               type="file"
//               onChange={this.handleChange}
//               value={this.state.cover_berita}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               component="span"
//               onClick={() => this.ubahBerita(this.state.id_berita)}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </Container>
//       </Page>
//     );
//   }
// }

const EditBerita = () => {
  const [judul_berita, setjudul_berita] = useState('');
  const [tgl_berita, settgl_berita] = useState('');
  const [isi_berita, setisi_berita] = useState('');
  const [cover_berita, setcover_berita] = useState('');
  const navigate = useNavigate();
  const { id_berita } = useParams();

  const saveBerita = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/ubahBerita', {
      judul_berita: judul_berita,
      tgl_berita: tgl_berita,
      isi_berita: isi_berita,
      cover_berita: cover_berita
    });
    navigate.push('/');
  };

  useEffect(() => {
    getBeritaById();
  }, []);

  const getBeritaById = async () => {
    const response = await axios.get(`http://localhost:3001/tampilBerita/${id_berita}`);
    setjudul_berita(response.data.judul_berita);
    settgl_berita(response.data.tgl_berita);
    setisi_berita(response.data.isi_berita);
    setcover_berita(response.data.cover_berita);
  };

  return (
    <Page title="Tambah Berita">
      <Container>
        <Typography variant="h4" mb={5} gutterBottom>
          Edit Berita
        </Typography>
        <Stack spacing={3} justifyContent="space-between">
          <TextField
            className="form-control"
            justifyContent="space-between"
            fullWidth
            label="Tanggal Berita"
            type="date"
            onChange={(e) => settgl_berita(e.target.value)}
            value={tgl_berita}
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            className="form-control"
            justifyContent="space-between"
            label="Judul Berita"
            placeholder="Masukan Judul Berita"
            fullWidth
            margin="normal"
            type="text"
            onChange={(e) => setjudul_berita(e.target.value)}
            value={judul_berita}
            InputLabelProps={{
              shrink: true
            }}
          />

          <TextField
            className="form-control"
            justifyContent="space-between"
            label="Isi Berita"
            placeholder="Masukan Isi Berita"
            fullWidth
            multiline
            margin="normal"
            type="text"
            onChange={(e) => setisi_berita(e.target.value)}
            value={isi_berita}
            InputLabelProps={{
              shrink: true
            }}
          />

          <Typography>Cover Berita</Typography>
          <Input
            className="form-control"
            accept="image/*"
            id="icon-button-file"
            type="file"
            onChange={(e) => setcover_berita(e.target.value)}
            value={cover_berita}
          />
          <Button variant="contained" color="primary" component="span" onSubmit={saveBerita}>
            Submit
          </Button>
        </Stack>
      </Container>
    </Page>
  );
};

export default EditBerita;
