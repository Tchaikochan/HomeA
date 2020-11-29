using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prjHomeA.Soul.Pages
{
    public partial class mk : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banker = new DataBase();
            string Title = Request["T"];
            if (Title == "" || Title == null)
            {
                return;

            }
            string DS = Request["D"];
            if (DS == "" || DS == null)
            {
                return;

            }
            string Condominio = Request["c"];
            if (Condominio == "" || Condominio == null)
            {
                return;

            }
            Banker.openBar("localhost", "root", "root", "HomeA");
            Banker.getCommand("SELECT * From Aviso_Reclamacao WHERE cd_tipo_Aviso_Reclamacao = 1");
            int Counter = 0;
            while (Banker.Selected.Read())
            {
                Counter++;

            }
            Banker.Refresh();
            Banker.openBar("localhost", "root", "root", "HomeA");
            Banker.setCommand("INSERT INTO Aviso_Reclamacao VALUES ('" + Title + "',CURRENT_DATE(),'" + DS + "'," + Counter + ",1," + Condominio + ");");
            Banker.Refresh();

        }
    }
}