/* eslint-disable prettier/prettier */
/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
import React, { PureComponent, useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Stack, Container, Input, Typography, Button } from '@material-ui/core';
import Page from '../components/Page';

// const api = 'http://localhost:3001';

// class AddBerita extends PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       tgl_berita: '',
//       cover_berita: '',
//       judul_berita: '',
//       isi_berita: '',
//       response: '',
//       display: 'none'
//     };
//   }

//   addberita = () => {
//     axios
//       .post(`${api}/tambahBerita`, {
//         tgl_berita: this.state.tgl_berita,
//         cover_berita: this.state.cover_berita,
//         judul_berita: this.state.judul_berita,
//         isi_berita: this.state.isi_berita
//       })
//       .then((json) => {
//         if (json.data.status === 200) {
//           console.log(json.data.status);
//           // alert("Mahasiswa telah ditambahkan");
//           this.setState({
//             response: json.data.values,
//             display: 'block'
//           });
//         } else {
//           // alert('Mahasiswa gagal tersimpan');
//           this.props.history.push('/dasboard/berita/addBerita');
//         }
//       });
//   };

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <Page title="Tambah Berita">
//         <Container>
//           <Typography variant="h4" mb={5} gutterBottom>
//             Tambah Berita
//           </Typography>
//           <Stack spacing={3} justifyContent="space-between">
//             <TextField
//               onChange={this.handleChange}
//               value={this.state.tgl_berita}
//               justifyContent="space-between"
//               fullWidth
//               label="Tanggal Berita"
//               type="date"
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <TextField
//               onChange={this.handleChange}
//               value={this.state.judul_berita}
//               justifyContent="space-between"
//               label="Judul Berita"
//               placeholder="Masukan Judul Berita"
//               fullWidth
//               margin="normal"
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <TextField
//               onChange={this.handleChange}
//               value={this.state.isi_berita}
//               justifyContent="space-between"
//               label="Isi Berita"
//               placeholder="Masukan Isi Berita"
//               fullWidth
//               multiline
//               margin="normal"
//               InputLabelProps={{
//                 shrink: true
//               }}
//             />

//             <Typography>Cover Berita</Typography>
//             <Input
//               accept="image/*"
//               id="icon-button-file"
//               type="file"
//               onChange={this.handleChange}
//               value={this.state.cover_berita}
//             />
//             <Button variant="contained" color="primary" component="span" onChange={this.addberita}>
//               Submit
//             </Button>
//           </Stack>
//         </Container>
//       </Page>
//     );
//   }
// }
function AddBerita() {
  const [judul_berita, setjudul_berita] = useState('');
  const [tgl_berita, settgl_berita] = useState('');
  const [isi_berita, setisi_berita] = useState('');
  const [cover_berita, setcover_berita] = useState('');

  const [beritaList, setBeritaList] = useState([]);

  // const getBerita = () => {
  //   axios.get('http://localhost:3001/tampilBerita').then((response) => {
  //     setBeritaList(response.data);
  //   });
  // };

  const addBerita = () => {
    axios
      .post('http://localhost:3001/tambahBerita', {
        judul_berita: judul_berita,
        tgl_berita: tgl_berita,
        isi_berita: isi_berita,
        cover_berita: cover_berita
      })
      .then(() => {
        setBeritaList([
          ...beritaList,
          {
            judul_berita: judul_berita,
            tgl_berita: tgl_berita,
            isi_berita: isi_berita,
            cover_berita: cover_berita
          }
        ]);
      });
  };

  return (
    <Page title="Tambah Berita">
      <Container>
        <Typography variant="h4" mb={5} gutterBottom>
          Tambah Berita
        </Typography>
        <Stack spacing={3} justifyContent="space-between">
          <TextField
            className="form-control"
            justifyContent="space-between"
            fullWidth
            label="Tanggal Berita"
            type="date"
            onChange={(event) => {
              settgl_berita(event.target.value);
            }}
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
            onChange={(event) => {
              setjudul_berita(event.target.value);
            }}
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
            onChange={(event) => {
              setisi_berita(event.target.value);
            }}
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
            onChange={(event) => {
              setcover_berita(event.target.value);
            }}
          />
          <Button variant="contained" color="primary" component="span" onClick={addBerita}>
            Submit
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}

export default AddBerita;
