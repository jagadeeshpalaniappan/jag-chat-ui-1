import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  // DialogActions,
  DialogContent,
  // DialogContentText,
  // DialogTitle,
  Paper
} from "@material-ui/core";
import { Button, Checkbox, Box, Divider } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DarkModeIcon from "@material-ui/icons/Brightness4";
// import PermDataSettingIcon from "@material-ui/icons/Settings 1";
import PeopleSettingIcon from "@material-ui/icons/People";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import PermDataSettingIcon from "@material-ui/icons/PermDataSetting";

import {
  Done as DoneIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
} from "@material-ui/icons";

const useStylesSettingContent = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(1)
  }
}));

const SettingsListContent = ({
  darkMode,
  toggleDarkMode,
  onApply,
  onClose
}) => {
  const classes = useStylesSettingContent();
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [cbState, setCbState] = React.useState({
    cb1: true,
    cb2: false
  });
  const handleCheckboxChange = event => {
    setCbState({ ...cbState, [event.target.name]: event.target.checked });
  };

  const [selectedOption, setSelectedOption] = React.useState("o2");
  const handleselectedOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <List subheader={<ListSubheader disableSticky>User Profile</ListSubheader>}>
        <ListItem>
          <ListItemIcon>
            <DarkModeIcon />
          </ListItemIcon>
          <ListItemText
            id="switch-list-label-wifi"
            primary="Dark Mode"
            secondary="Switch to Dark Mode"
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              color="primary"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermDataSettingIcon />
          </ListItemIcon>
          <ListItemText primary="Settings 1" secondary="This is a help text" />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              color="primary"
              onChange={handleToggle("Settings 1")}
              checked={checked.indexOf("Settings 1") !== -1}
              inputProps={{ "aria-labelledby": "switch-list-label-Settings 1" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermDataSettingIcon />
          </ListItemIcon>
          <ListItemText
            primary="Menu Settings"
            secondary="This is a help text"
          />
          <ListItemSecondaryAction>
            <Select
              autoFocus
              value={selectedOption}
              onChange={handleselectedOptionChange}
              inputProps={{
                name: "max-width",
                id: "max-width"
              }}
            >
              <MenuItem value={false}>Select</MenuItem>
              <MenuItem value="o1">Option 1</MenuItem>
              <MenuItem value="o2">Option 2</MenuItem>
              <MenuItem value="o3">Option 3</MenuItem>
              <MenuItem value="o4">Option 4</MenuItem>
              <MenuItem value="o5">Option 5</MenuItem>
            </Select>
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermDataSettingIcon />
          </ListItemIcon>
          <ListItemText
            primary="Checkbox Settings"
            secondary="This is a help text"
          />
          <ListItemSecondaryAction>
            <Checkbox
              name="cb1"
              checked={cbState.cb1}
              onChange={handleCheckboxChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PermDataSettingIcon />
          </ListItemIcon>
          <ListItemText
            primary="Love Settings"
            secondary="This is a help text"
          />
          <ListItemSecondaryAction>
            <Checkbox
              name="cb2"
              checked={cbState.cb2}
              onChange={handleCheckboxChange}
              icon={<FavoriteBorderIcon />}
              checkedIcon={<FavoriteIcon />}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>

      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button size="medium" onClick={onClose}>
          Cancel
        </Button>
        <Button
          size="medium"
          onClick={onApply}
          color="primary"
          variant="contained"
          startIcon={<DoneIcon fontSize="small" />}
          className={{ root: classes.margin }}
        >
          Apply
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  listItemSelected: {
    backgroundColor: theme.palette.background.paper,
    "&.Mui-selected": {
      backgroundColor: theme.palette.background.paper
    }
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const settings = [
  { id: "s1", name: "App Settings", icon: <PeopleSettingIcon /> },
  { id: "s2", name: "User Profile", icon: <PhonelinkSetupIcon /> },
  { id: "s3", name: "Tennant Settings", icon: <PeopleSettingIcon /> },
  { type: "divider" },
  { id: "s4", name: "Theme Settings", icon: <PhonelinkSetupIcon /> },
  { id: "s5", name: "Other Settings", icon: <PhonelinkSetupIcon /> }
];

const SettingsList = () => {
  const classes = useStyles();
  const [selectedSetting, setSelectedSetting] = useState(settings[1]);

  const handleSettingSelection = item => {
    setSelectedSetting(item);
  };

  return (
    <>
      <List component="nav" aria-label="main mailbox folders">
        {settings.map((setting, idx) => (
          <>
            {setting.type === "divider" && <Divider key={idx} />}
            {setting.type !== "divider" && (
              <ListItem
                key={idx}
                button
                selected={selectedSetting.id === setting.id}
                classes={{ selected: classes.listItemSelected }}
                onClick={() => handleSettingSelection(setting)}
              >
                <ListItemIcon>{setting.icon}</ListItemIcon>
                <ListItemText primary={setting.name} />
              </ListItem>
            )}
          </>
        ))}
      </List>
    </>
  );
};

const useStylesModal = makeStyles(theme => ({
  root: {
    padding: 0,
    backgroundColor: theme.palette.background.paper,
    "&:first-child": {
      padding: 0
    }
  },
  left: {
    padding: 0,
    backgroundColor: theme.palette.background.default
  }
}));

export default function SettingsModal({ open, onOk, onClose }) {
  const classes = useStylesModal();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [selectedOption, setSelectedOption] = React.useState("o3");
  const [darkMode, setDarkMode] = React.useState(true);

  const handleselectedOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  const handleFullWidthChange = event => {
    setFullWidth(event.target.checked);
  };

  const toggleDarkMode = event => {
    setDarkMode(event.target.checked);
  };

  const onApply = event => {
    onOk({ darkMode });
  };

  return (
    <>
      <Dialog
        fullWidth={fullWidth}
        maxWidth="md"
        open={open}
        onClose={onClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogContent classes={{ root: classes.root }}>
          <Box display="flex">
            <Box width={200} classes={{ root: classes.left }}>
              <SettingsList
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
              />
            </Box>
            <Box flexGrow={1}>
              <SettingsListContent
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                onClose={onClose}
                onApply={onApply}
              />
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
