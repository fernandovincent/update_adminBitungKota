/* eslint-disable react/self-closing-comp */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unused-state */
import { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import {
  Card,
  Table,
  Stack,
  Button,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TableHead,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import plusFill from '@iconify/icons-eva/plus-fill';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import editFill from '@iconify/icons-eva/edit-fill';
import eyeFill from '@iconify/icons-eva/eye-fill';
import qs from 'querystring';

// components
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import { UserListToolbar, UserMoreMenu } from '../components/_dashboard/user';

const api = 'http://localhost:3001';

// class Berita extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       berita: [],
//       response: '',
//       display: 'none'
//     };
//   }

//   componentDidMount() {
//     axios.get(`${api}/tampilBerita`).then((res) => {
//       console.log(res.data.values);
//       this.setState({
//         berita: res.data.values
//       });
//     });
//   }

//   render() {
//     return (
//       <Page title="Berita | Minimal-UI">
//         <Container>
//           <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//             <Typography variant="h4" gutterBottom>
//               Berita
//             </Typography>
//             <Button
//               variant="contained"
//               component={RouterLink}
//               to="/dashboard/addBerita"
//               startIcon={<Icon icon={plusFill} />}
//             >
//               Tambah Berita
//             </Button>
//           </Stack>
//           <Card>
//             <UserListToolbar />
//             <Scrollbar>
//               <TableContainer sx={{ minWidth: 800 }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Tanggal Berita</TableCell>
//                       <TableCell>Cover Berita</TableCell>
//                       <TableCell>Judul Berita</TableCell>
//                       <TableCell>Isi Berita</TableCell>
//                       <TableCell>Aksi</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {this.state.berita.map((berita) => (
//                       <TableRow key={berita.id_berita}>
//                         <TableCell>{berita.tgl_berita}</TableCell>
//                         <TableCell>
//                           <img src={`../assets/img/${berita.cover_berita}`} />
//                         </TableCell>
//                         <TableCell>{berita.judul_berita}</TableCell>
//                         <TableCell>{berita.isi_berita}</TableCell>
//                         <TableCell>
//                           <MenuItem component={RouterLink} to="#" sx={{ color: 'blue' }}>
//                             <ListItemIcon>
//                               <Icon icon={eyeFill} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Detail"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                           <MenuItem sx={{ color: 'red' }}>
//                             <ListItemIcon>
//                               <Icon icon={trash2Outline} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Delete"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                           <MenuItem
//                             component={RouterLink}
//                             to={{
//                               pathname: `/dashboard/editBerita`,
//                               state: {
//                                 is_edit: true,
//                                 id_berita: berita.id_berita,
//                                 judul_berita: berita.judul_berita,
//                                 isi_berita: berita.isi_berita,
//                                 tgl_berita: berita.tgl_berita,
//                                 cover_berita: berita.cover_berita
//                               }
//                             }}
//                             sx={{ color: 'orange' }}
//                           >
//                             <ListItemIcon>
//                               <Icon icon={editFill} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Edit"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Scrollbar>
//           </Card>
//         </Container>
//       </Page>
//     );
//   }
// }

// function Berita() {
//   const [beritas, setBeritas] = useState([]);

//   const getBerita = async () => {
//     const response = await fetch(api);
//     const beritas = await response.json();
//     setBeritas(beritas.values);
//     // console.log(beritas);
//   };
//   useEffect(() => {
//     getBerita();
//   }, []);

// class Berita extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       berita: [],
//       response: '',
//       display: 'none'
//     };
//   }

//   componentDidMount() {
//     axios.get(api + '/tampilBerita').then((res) => {
//       console.log(res.data.values);
//       this.setState({
//         berita: res.data.values
//       });
//     });
//   }

//   render() {
//     return (
//       <Page title="Berita | Minimal-UI">
//         <Container>
//           <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
//             <Typography variant="h4" gutterBottom>
//               Berita
//             </Typography>
//             <Button
//               variant="contained"
//               component={RouterLink}
//               to="/dashboard/addBerita"
//               startIcon={<Icon icon={plusFill} />}
//             >
//               Tambah Berita
//             </Button>
//           </Stack>
//           <Card>
//             <UserListToolbar />
//             <Scrollbar>
//               <TableContainer sx={{ minWidth: 800 }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Tanggal Berita</TableCell>
//                       <TableCell>Cover Berita</TableCell>
//                       <TableCell>Judul Berita</TableCell>
//                       <TableCell>Isi Berita</TableCell>
//                       <TableCell>Aksi</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {this.state.berita.map((berita) => (
//                       <TableRow key={berita.id_berita}>
//                         <TableCell>{berita.tgl_berita}</TableCell>
//                         <TableCell>
//                           <img src={`../assets/img/${berita.cover_berita}`} />
//                         </TableCell>
//                         <TableCell>{berita.judul_berita}</TableCell>
//                         <TableCell>{berita.isi_berita}</TableCell>
//                         <TableCell>
//                           <MenuItem component={RouterLink} to="#" sx={{ color: 'blue' }}>
//                             <ListItemIcon>
//                               <Icon icon={eyeFill} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Detail"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                           <MenuItem sx={{ color: 'red' }}>
//                             <ListItemIcon>
//                               <Icon icon={trash2Outline} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Delete"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                           <MenuItem
//                             component={RouterLink}
//                             to="/dashboard/editBerita"
//                             // to={{
//                             //   pathname: `/dashboard/editBerita`,
//                             //   state: {
//                             //     is_edit: true,
//                             //     id_berita: berita.id_berita,
//                             //     judul_berita: berita.judul_berita,
//                             //     isi_berita: berita.isi_berita,
//                             //     tgl_berita: berita.tgl_berita,
//                             //     cover_berita: berita.cover_berita
//                             //   }
//                             // }}
//                             sx={{ color: 'orange' }}
//                           >
//                             <ListItemIcon>
//                               <Icon icon={editFill} width={24} height={24} />
//                             </ListItemIcon>
//                             <ListItemText
//                               primary="Edit"
//                               primaryTypographyProps={{ variant: 'body2' }}
//                             />
//                           </MenuItem>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>
//             </Scrollbar>
//           </Card>
//         </Container>
//       </Page>
//     );
//   }
// }

class Berita extends Component {
  constructor(props) {
    super(props);

    this.state = {
      berita: [],
      response: '',
      display: 'none'
    };
  }

  componentDidMount() {
    axios.get(api + '/tampilBerita').then((res) => {
      console.log(res.data.values);
      this.setState({
        berita: res.data.values
      });
    });
  }

  DeleteBerita = (idberita) => {
    const { berita } = this.state;
    const data = qs.stringify({
      id_berita: idberita
    });

    axios
      .delete(api + '/hapusBerita', {
        data: data,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then((json) => {
        if (json.data.status === 200) {
          console.log(json.data.status);
          this.setState({
            response: json.data.values,
            berita: berita.filter((berita) => berita.id_berita !== idberita),
            display: 'block'
          });
        }
      });
  };

  render() {
    return (
      <Page title="Berita | Minimal-UI">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Berita
            </Typography>
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/addBerita"
              startIcon={<Icon icon={plusFill} />}
            >
              Tambah Berita
            </Button>
          </Stack>
          <Card>
            <UserListToolbar />
            <Scrollbar>
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tanggal Berita</TableCell>
                      <TableCell>Cover Berita</TableCell>
                      <TableCell>Judul Berita</TableCell>
                      <TableCell>Isi Berita</TableCell>
                      <TableCell>Aksi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.berita.map((berita) => (
                      <TableRow key={berita.id_berita}>
                        <TableCell>{berita.tgl_berita}</TableCell>
                        <TableCell>
                          <img src={berita.cover_berita}></img>
                        </TableCell>
                        <TableCell>{berita.judul_berita}</TableCell>
                        <TableCell>{berita.isi_berita}</TableCell>
                        <TableCell>
                          <MenuItem component={RouterLink} to="#" sx={{ color: 'blue' }}>
                            <ListItemIcon>
                              <Icon icon={eyeFill} width={24} height={24} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Detail"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </MenuItem>
                          <MenuItem
                            onClick={() => this.DeleteBerita(berita.id_berita)}
                            sx={{ color: 'red' }}
                          >
                            <ListItemIcon>
                              <Icon icon={trash2Outline} width={24} height={24} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Delete"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </MenuItem>
                          <MenuItem
                            component={RouterLink}
                            to="/dashboard/editBerita"
                            sx={{ color: 'orange' }}
                          >
                            <ListItemIcon>
                              <Icon icon={editFill} width={24} height={24} />
                            </ListItemIcon>
                            <ListItemText
                              primary="Edit"
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </MenuItem>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
        </Container>
      </Page>
    );
  }
}

export default Berita;
