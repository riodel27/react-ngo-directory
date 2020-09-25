import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";

import { User } from "@/global/types";

interface TableProps {
  users: [User];
  organizations: [any];
}

export const DashboardTable: React.FC<TableProps> = ({
  users,
  organizations,
}) => {
  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Organizations
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {organizations &&
            organizations.map((org) => (
              <TableRow key={org._id}>
                <TableCell>{org.org_name}</TableCell>
                <TableCell>{org.org_description}</TableCell>
                <TableCell>{org.org_city}</TableCell>
                <TableCell>{org.org_country}</TableCell>
                <TableCell>
                  <AddIcon />
                  <CreateIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <br></br>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Users
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.language}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>
                  <AddIcon />
                  <CreateIcon />
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default DashboardTable;
