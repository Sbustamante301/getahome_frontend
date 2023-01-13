import {
    RiCloseFill, RiArrowDownSLine, RiNotificationFill, RiArticleLine, RiFileUserLine, RiNotificationLine,
    RiCheckFill, RiCloseLine, RiMoneyDollarCircleLine, RiBriefcaseLine, RiUserLine, RiHeartLine, RiMoneyDollarCircleFill, RiFocusLine,
    RiMailLine, RiTimeLine, RiGithubFill, RiCalendarLine, RiHeartFill, RiAccountCircleLine, RiLogoutCircleLine, RiBuildingLine, RiTwitterFill,
    RiSearchLine, RiReactjsLine, RiArrowLeftSLine, RiNavigationLine, RiUploadLine, RiPauseCircleLine, RiMailCheckLine, RiChatCheckLine,
    RiDownloadLine, RiArrowUpSLine, RiCloseCircleLine, RiMailOpenLine, RiPhoneLine, RiLinkedinBoxLine, RiFileAddLine, RiUserAddLine,
    RiUserReceivedLine, RiLinkedinLine, RiArrowRightSLine, RiHotelBedLine, RiCoinsLine, RiBuilding3Line, RiHome8Line, RiDeleteBin6Line,


} from "react-icons/ri";

import { DiRuby } from "react-icons/di";
import { BiBath, BiArea, BiBed } from "react-icons/bi"
import { FaRegEdit } from "react-icons/fa";
import { FaPaw } from "react-icons/fa"
import { GiPositionMarker } from "react-icons/gi";
import { CgTrash } from "react-icons/cg";
import { BSCheckSquare, BsSquare } from "react-icons/bs"
import { colors } from "./styles"
import styled from "@emotion/styled";







export const Icons = {
    arrowDown: <RiArrowDownSLine style={{ width: "16px", height: "21px" }} />,
    notificationDark: <RiNotificationFill />,
    article: <RiArticleLine />,
    fileUser: <RiFileUserLine />,
    notificationLight: <RiNotificationLine />,
    check: <RiCheckFill />,
    close: <RiCloseLine />,
    dollarCircleDark: <RiMoneyDollarCircleFill />,
    briefcase: <RiBriefcaseLine />,
    user: <RiUserLine style={{ width: "16px", height: "21px" }} />,
    heart: <RiHeartLine />,
    dollarCircle: <RiMoneyDollarCircleLine style={{ width: "27px", height: "27px" }} />,
    focus: <RiFocusLine />,
    mail: <RiMailLine />,
    time: <RiTimeLine />,
    github: <RiGithubFill />,
    calendar: <RiCalendarLine />,
    heartDark: <RiHeartFill />,
    accountCircle: <RiAccountCircleLine />,
    logoutCircle: <RiLogoutCircleLine />,
    building3: <RiBuilding3Line style={{ width: "22px", height: "18px" }} />,
    twitter: <RiTwitterFill />,
    search: <RiSearchLine />,
    react: <RiReactjsLine />,
    ruby: <DiRuby />,
    arrowLeft: <RiArrowLeftSLine style={{ width: "20px", height: "52px" }} />,
    navigationArrow: <RiNavigationLine />,
    upload: <RiUploadLine />,
    pause: <RiPauseCircleLine />,
    mailCheck: <RiMailCheckLine />,
    chatCheck: <RiChatCheckLine />,
    download: <RiDownloadLine />,
    closed: <RiCloseFill style={{ width: "20px", height: "20px" }} />,
    arrowUp: <RiArrowUpSLine />,
    closeCircle: <RiCloseCircleLine style={{ color: `${colors.gray.light}`, scale: 2 }} />,
    mailOpen: <RiMailOpenLine />,
    phone: <RiPhoneLine />,
    linkedinBox: <RiLinkedinBoxLine />,
    addFile: <RiFileAddLine />,
    userAdd: <RiUserAddLine />,
    userReceived: <RiUserReceivedLine />,
    linkedin: <RiLinkedinLine />,
    arrowRight: <RiArrowRightSLine style={{ width: "20px", height: "52px" }} />,
    hotelBed: <RiHotelBedLine />,
    bath: <BiBath style={{ width: "20px", height: "19px" }} />,
    area: <BiArea style={{ width: "20px", height: "19px" }} />,
    bed: <BiBed style={{ width: "20px", height: "19px" }} />,
    paw: <FaPaw style={{ width: "20px", height: "17.5px" }} />,
    coins: <RiCoinsLine style={{ width: "17px", height: "17px" }} />,
    building: <RiBuildingLine />,
    home: <RiHome8Line />,
    bin: <RiDeleteBin6Line />,
    edit: <FaRegEdit />,
    trash: <CgTrash />,

    positioner: <GiPositionMarker />,














}


